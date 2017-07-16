import I18n from 'react-native-i18n'
import {en , de} from '../../config';
//cusotmer kapsch wanted for all devices english version
I18n.fallbacks = true

I18n.translations = {
	en: en,
	de: de
}
export const i18n = I18n;