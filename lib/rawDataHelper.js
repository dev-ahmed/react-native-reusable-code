import Is from 'is_js';
import _ from 'lodash';
import { mediaHelper } from './'

class RawDataHelper {

    getLastItemOfArray(arr) {
        if (Array.isArray(arr) && arr.length > 0) {
            return _.last(arr);
        }
    }

    parseJsonToFormData(object) {
        var data = [];
        for (var property in object) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(object[property]);
            data.push(encodedKey + "=" + encodedValue);
        }
        return data.join("&");
    }

    isObjectContainArray(params) {
        for (var key in params) {
            if (Array.isArray(params[key])) {
                return true;
            }
        }
        return false;
    }

}

export const rawDataHelper = new RawDataHelper();