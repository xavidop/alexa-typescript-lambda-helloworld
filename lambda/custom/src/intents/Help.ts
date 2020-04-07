import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { IsIntent } from '../utilities/helpers';
import { IntentTypes, Strings } from '../utilities/constants';
import i18n from 'i18next';

export const Help: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsIntent(handlerInput, IntentTypes.Help);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = i18n.t(Strings.HELP_MSG);

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(i18n.t(Strings.SKILL_NAME), speechText)
      .getResponse();
  },
};
