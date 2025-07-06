import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './file-upload.html',
  styleUrls: ['./file-upload.scss']
})
export class FileUploadComponent implements OnInit {
  @Input() accept: string = 'image/*';
  @Input() multiple: boolean = false;
  @Input() maxSize: number = 1 * 1024 * 1024; // 1MB default
  @Input() placeholder: string = 'Upload an image';
  @Input() value: string = '';
  
  @Output() fileUploaded = new EventEmitter<string>();
  @Output() fileRemoved = new EventEmitter<void>();
  @Output() valueChange = new EventEmitter<string>();

  fileUrl: string = '';
  fileName: string = '';
  fileSize: string = '';
  isImage: boolean = false;
  isDragOver: boolean = false;
  isUploading: boolean = false;
  uploadProgress: number = 0;
  error: string = '';

  ngOnInit() {
    if (this.value) {
      this.fileUrl = this.value;
      this.isImage = this.isImageFile(this.value);
      // Try to get file info from localStorage if available
      const fileInfo = this.getFileInfo(this.value);
      if (fileInfo) {
        this.fileName = fileInfo.name;
        this.fileSize = this.formatFileSize(fileInfo.size);
      }
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  private handleFile(file: File) {
    this.error = '';
    
    // Validate file type
    if (!this.isValidFileType(file)) {
      this.error = 'Invalid file type. Please select an image file.';
      return;
    }
    
    // Validate file size
    if (file.size > this.maxSize) {
      this.error = `File size too large. Maximum size is ${this.formatFileSize(this.maxSize)}.`;
      return;
    }

    this.isUploading = true;
    this.uploadProgress = 0;
    
    // Simulate upload progress
    const progressInterval = setInterval(() => {
      this.uploadProgress += 10;
      if (this.uploadProgress >= 100) {
        clearInterval(progressInterval);
        this.completeUpload(file);
      }
    }, 100);
  }

  private completeUpload(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      
      try {
        // Store file in localStorage with error handling
        const fileId = this.generateFileId();
        const fileInfo = {
          id: fileId,
          name: file.name,
          size: file.size,
          type: file.type,
          data: result,
          uploadedAt: new Date().toISOString()
        };
        
        // Check if we can store the file
        const fileData = JSON.stringify(fileInfo);
        const estimatedSize = new Blob([fileData]).size;
        
        // Check available localStorage space
        if (!this.checkLocalStorageSpace(estimatedSize)) {
          this.error = 'File too large for local storage. Please use a smaller image or try cloud storage.';
          this.isUploading = false;
          this.uploadProgress = 0;
          return;
        }
        
        // Try to store the file
        try {
          localStorage.setItem(`file_${fileId}`, fileData);
        } catch (storageError) {
          console.error('Storage error:', storageError);
          this.error = 'Unable to store file locally. Please try a smaller image or check your browser storage.';
          this.isUploading = false;
          this.uploadProgress = 0;
          return;
        }
        
        // Update component state
        this.fileUrl = result;
        this.fileName = file.name;
        this.fileSize = this.formatFileSize(file.size);
        this.isImage = file.type.startsWith('image/');
        this.isUploading = false;
        this.uploadProgress = 0;
        
        // Emit events
        this.fileUploaded.emit(result);
        this.valueChange.emit(result);
        
      } catch (error) {
        console.error('Upload error:', error);
        this.error = 'Failed to process the uploaded file. Please try again.';
        this.isUploading = false;
        this.uploadProgress = 0;
      }
    };
    
    reader.onerror = () => {
      this.error = 'Failed to read the file. Please try again.';
      this.isUploading = false;
      this.uploadProgress = 0;
    };
    
    reader.readAsDataURL(file);
  }

  removeFile() {
    // Remove from localStorage if it was stored there
    if (this.fileUrl && this.fileUrl.startsWith('data:')) {
      const fileInfo = this.getFileInfo(this.fileUrl);
      if (fileInfo) {
        localStorage.removeItem(`file_${fileInfo.id}`);
      }
    }
    
    this.fileUrl = '';
    this.fileName = '';
    this.fileSize = '';
    this.isImage = false;
    this.error = '';
    
    this.fileRemoved.emit();
    this.valueChange.emit('');
  }

  private isValidFileType(file: File): boolean {
    if (this.accept === 'image/*') {
      return file.type.startsWith('image/');
    }
    return true; // Add more validation as needed
  }

  private isImageFile(url: string): boolean {
    return url.startsWith('data:image/') || 
           url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i) !== null;
  }

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  private generateFileId(): string {
    return 'file_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private getFileInfo(url: string): any {
    // Try to find file info in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('file_')) {
        try {
          const fileInfo = JSON.parse(localStorage.getItem(key) || '');
          if (fileInfo.data === url) {
            return fileInfo;
          }
        } catch (e) {
          // Ignore invalid JSON
        }
      }
    }
    return null;
  }

  private checkLocalStorageSpace(requiredSize: number): boolean {
    try {
      // Estimate available space by trying to store a test item
      const testKey = 'storage_test_' + Date.now();
      const testData = 'x'.repeat(Math.min(requiredSize, 1024)); // Test with 1KB or required size, whichever is smaller
      
      localStorage.setItem(testKey, testData);
      localStorage.removeItem(testKey);
      
      return true;
    } catch (error) {
      console.warn('LocalStorage space check failed:', error);
      return false;
    }
  }
} 