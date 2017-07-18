class ViewHelper {
    getViewOffset(viewRef, callback) {
        viewRef.measure((fx, fy, width, height, px, py) => {
            callback({
                fx, fy, width, height, px, py
            })

        })
    }
}

export const viewHelper = new ViewHelper();