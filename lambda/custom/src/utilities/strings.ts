import { Strings, LocaleTypes } from './constants';

interface IStrings {
  [Strings.SKILL_NAME]: string;
  [Strings.WELCOME_MSG]: string;
  [Strings.GOODBYE_MSG]: string;
  [Strings.HELLO_MSG]: string;
  [Strings.HELP_MSG]: string;
  [Strings.ERROR_MSG]: string;
  [Strings.REFLECTOR_MSG]: string;
  [Strings.FALLBACK_MSG]: string;
}

export const strings = {
  [LocaleTypes.esES]: {
    translation: {
      SKILL_NAME: 'Hello world',
      WELCOME_MSG: 'Bienvenido, puedes decir Hola o Ayuda. Cual prefieres?',
      HELLO_MSG: 'Hola Mundo!',
      HELP_MSG: 'Puedes decirme hola. Cómo te puedo ayudar?',
      GOODBYE_MSG: 'Hasta luego!',
      REFLECTOR_MSG: 'Acabas de activar {{intentName}}',
      FALLBACK_MSG:
        'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez.',
      ERROR_MSG: 'Lo siento, ha habido un error. Por favor inténtalo otra vez.',
    } as IStrings,
  },
};
