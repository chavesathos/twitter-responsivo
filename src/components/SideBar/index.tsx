import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
      <Body>
        <List 
          title="Talvez voce curta"
          elements={[
            <FollowSuggestion 
              name="Eduardo Cabloco"
              nickname="@duducablocao"
            />,
            <FollowSuggestion 
              name="Zeca Baleiro"
              nickname="@zecabolado"
            />,
            <FollowSuggestion
            name="Monica do Eduardo"
            nickname="@monicaxonada"
          />,
          ]}
        />
         <List 
          title="Talvez voce curta"
          elements={[
            <News />,
            <News />,
          ]}
        />
        <List 
          title="Talvez voce curta"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />,
          ]}
        />
        <List 
          title="Talvez voce curta"
          elements={[
            <News />,
            <News />,
          ]}
        />
        <List 
        title="Talvez voce curta"
        elements={[
          <News />,
          <News />,
        ]}
      />
      </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
