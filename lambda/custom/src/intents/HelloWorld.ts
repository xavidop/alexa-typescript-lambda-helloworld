import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { IsIntent } from '../utilities/helpers';
import { IntentTypes, Strings } from '../utilities/constants';
import i18n from 'i18next';

export const HelloWorld: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsIntent(handlerInput, IntentTypes.HelloWorld);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = i18n.t(Strings.HELLO_MSG);

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(i18n.t(Strings.SKILL_NAME), speechText)
      .getResponse();
  },
};
