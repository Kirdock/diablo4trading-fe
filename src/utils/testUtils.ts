import { Game } from '@diablosnaps/common';

export const getDefaultContext = ()=> (
    {
        language: Game.Language.German,
        affixes: {
            definitions: {
                basic: {},
                legendary: {},
                unique: {},
            },
            descriptions: {
                [Game.Language.German]: {},
                [Game.Language.English]: {},
                [Game.Language.Spanish]: {},
                [Game.Language.Mexican]: {},
                [Game.Language.Italian]: {},
                [Game.Language.Japanese]: {},
                [Game.Language.Korean]: {},
                [Game.Language.Polish]: {},
                [Game.Language.Portuguese]: {},
                [Game.Language.Russian]: {},
                [Game.Language.Turkish]: {},
                [Game.Language.SimplifiedChinese]: {},
                [Game.Language.TraditionalChinese]: {},
                [Game.Language.French]: {},
            },
            attributes: {},
        },
        loading: false,
        translations: {
            [Game.Language.German]: {},
            [Game.Language.English]: {},
            [Game.Language.Spanish]: {},
            [Game.Language.Mexican]: {},
            [Game.Language.French]: {},
            [Game.Language.Italian]: {},
            [Game.Language.Japanese]: {},
            [Game.Language.Korean]: {},
            [Game.Language.Polish]: {},
            [Game.Language.Portuguese]: {},
            [Game.Language.Russian]: {},
            [Game.Language.Turkish]: {},
            [Game.Language.SimplifiedChinese]: {},
            [Game.Language.TraditionalChinese]: {}
        }
    });
