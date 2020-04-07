import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { IntentTypes, Strings } from '../utilities/constants';
import { IsIntent } from '../utilities/helpers';
import i18n from 'i18next';

export const Stop: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsIntent(handlerInput, IntentTypes.Stop, IntentTypes.Cancel);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = i18n.t(Strings.GOODBYE_MSG);

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(i18n.t(Strings.SKILL_NAME), speechText)
      .getResponse();
  },
};
