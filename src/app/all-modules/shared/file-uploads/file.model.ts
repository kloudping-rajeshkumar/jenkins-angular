export class FileUpload {
  fileName: string;
  fileId: string;
  constructor(model: any) {
    {
        this.fileName = model.fileName || '';
        this.fileId = model.fileId || '';
    }
  }

}
