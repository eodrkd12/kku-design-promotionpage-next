import Resizer from "react-image-file-resizer";

export class ImageUtil {
  static resize(file: Blob, cb: (uri: string) => void) {
    return new Promise((res) => {
      Resizer.imageFileResizer(
        file, // target file
        300, // maxWidth
        300, // maxHeight
        "JPEG", // compressFormat : Can be either JPEG, PNG or WEBP.
        80, // quality : 0 and 100. Used for the JPEG compression
        0, // rotation
        (uri) => {
          cb(uri.toString());
        }, // responseUriFunc
        "base64" // outputType : Can be either base64, blob or file.(Default type is base64)
      );
    });
  }
}
