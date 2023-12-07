import React, {useState} from 'react';
import {useBackgroundContext} from 'context/backgroud';
import {ToggleSwitch} from 'components/toggleSwitch';
import rotas from 'resourses/rotas';
import {useTranslation} from 'react-i18next';
import {namespaces} from '../../utils/i18n';
import '../../utils/i18n';
import {BandeiraBrasil, BandeiraUSA} from 'components/bandeiras';
import * as S from './NavBar.styles';
import {ItemNavBar} from 'components/itemNavBar/ItemNavBar';

type Props = S.PropsRightNav & {
  mudarEstado: () => void;
};

export const NavBar = (props: Props) => {
  const {openRightNav} = props;
  const {i18n} = useTranslation(namespaces.pages.header);
  const {temaEscuro, handleToggle} = useBackgroundContext();
  const [telaAtiva, setTelaAtiva] = useState<string>('Home');

  const handleToggleSwich = () => {
    handleToggle();
  };

  return (
    <S.ContainerNav data-testid={'test_rightNav'}>
      <S.ContainerContent
        data-testid={'test_containerContent'}
        openRightNav={openRightNav}>
        {Object.keys(rotas)
          .slice(0, -1)
          .map((item: string) => {
            return (
              <ItemNavBar
                key={item}
                rota={item}
                telaAtiva={telaAtiva}
                handleTelaAtiva={(item: string): void => {
                  setTelaAtiva(item);
                }}
              />
            );
          })}
        <S.Flag>
          <BandeiraBrasil
            idiomaSelecionado={i18n.resolvedLanguage === 'pt'}
            mudarIdioma={() => i18n.changeLanguage('pt')}
          />
          <BandeiraUSA
            idiomaSelecionado={i18n.resolvedLanguage === 'en'}
            mudarIdioma={() => i18n.changeLanguage('en')}
          />
        </S.Flag>
        <S.Item data-testid={'test_toggle'}>
          <ToggleSwitch isOn={temaEscuro} handleOnclick={handleToggleSwich} />
        </S.Item>
      </S.ContainerContent>
    </S.ContainerNav>
  );
};
