import ImagePicker from 'react-native-image-crop-picker';

class MediaHelper {

    getYoutubeIDFromURL(url) {
        let regex = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
        var videoid = url.match(regex);
        if (videoid != null) {
            return videoid[1];
        }
    }

    isYoutube(url) {
        let regex = /^http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
        return _checkRegexHelper(url, regex);
    }

    isImage(url) {
        let regex = /^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/;
        return _checkRegexHelper(url, regex);

    }

    getFileExtension(file) {
        return file.split('.').pop();
    }


}

export const mediaHelper = new MediaHelper();

function _checkRegexHelper(url, regex) {
    if (url.match(regex)) {
        return true;
    } else {
        return false;
    }
}
