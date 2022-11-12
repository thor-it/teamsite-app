import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";

export function usePhotoGallery() {
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        console.log(photo.path);
    };

    return {
        takePhoto,
    };
}