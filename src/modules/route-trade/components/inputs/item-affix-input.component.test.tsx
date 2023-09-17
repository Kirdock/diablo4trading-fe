import { render, screen } from '@testing-library/react';
import { ItemAffixInput } from './item-affix-input.component.tsx';
import { Common } from '@modules/common/index.ts';
import { Redux } from '@modules/redux/index.ts';
import { AssetsContext } from '@modules/common/providers/assets.context.ts';
import { PropsWithChildren } from 'react';
import { getDefaultContext } from '../../../../utils/testUtils.ts';

// region Helpers
// region Mocks
const defaultContext = getDefaultContext();
const Wrapper = ({children}: PropsWithChildren) => {
    return (
        <Redux.StoreProvider>
            <Common.LanguageSwitch>
                <Common.Theme>
                    <AssetsContext.Provider value={defaultContext}>
                        {children}
                    </AssetsContext.Provider>
                </Common.Theme>
            </Common.LanguageSwitch>
        </Redux.StoreProvider>
    )
}
// endregion
// endregion
describe('Test', () => {
    it('should render', () => {
        // arrange
        render(<ItemAffixInput label={'my label'} onChange={ ()=> {}} value={'asdf'} />, {wrapper: Wrapper})

        screen.debug();
    })
})
