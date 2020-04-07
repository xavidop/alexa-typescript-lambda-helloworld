import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { IsIntent } from '../utilities/helpers';
import { IntentTypes, Strings } from '../utilities/constants';
import i18n from 'i18next';

export const Fallback: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsIntent(handlerInput, IntentTypes.Fallback);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = i18n.t(Strings.ERROR_MSG);

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(i18n.t(Strings.HELP_MSG))
      .getResponse();
  },
};
