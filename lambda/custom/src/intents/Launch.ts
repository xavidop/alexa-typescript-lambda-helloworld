import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { RequestTypes, Strings } from '../utilities/constants';
import { IsType } from '../utilities/helpers';
import i18n from 'i18next';

export const Launch: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsType(handlerInput, RequestTypes.Launch);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = i18n.t(Strings.WELCOME_MSG);

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(i18n.t(Strings.SKILL_NAME), speechText)
      .getResponse();
  },
};
