import React from 'react';
import {TextoSmall, TextoXSmall} from 'components/texto';
import {useNavigate} from 'react-router-dom';
import colors from 'resourses/colors';
import {useTranslation} from 'react-i18next';
import {namespaces} from '../../utils/i18n';
import '../../utils/i18n';
import * as S from './ItemNavBar.styles';

type Props = S.PropsItemNavBar & {
  rota: string;
  telaAtiva: string;
  handleTelaAtiva: (item: string) => void;
};

export const ItemNavBar = (props: Props) => {
  const navigate = useNavigate();
  const {rota, telaAtiva, handleTelaAtiva} = props;
  const {t} = useTranslation(namespaces.pages.header);

  const handleNavegate = (item: string) => {
    handleTelaAtiva(item);
    navigate(item);
  };

  const tela = telaAtiva === rota;

  return (
    <S.ItemNav
      isActive={tela}
      onClick={() => {
        handleNavegate(rota);
      }}>
      {tela ? (
        <S.ContainerItem isActive={tela}>
          <TextoSmall peso="bold" cursor="default">
            {t(rota)}
          </TextoSmall>
        </S.ContainerItem>
      ) : (
        <S.ContainerItem isActive={tela}>
          <TextoXSmall cursor="pointer" cor={colors.lightgray}>
            {t(rota)}
          </TextoXSmall>
        </S.ContainerItem>
      )}
    </S.ItemNav>
  );
};
