import React from 'react';
import StickyBox from 'react-sticky-box'; /* Imita o scroll do Twitter */

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
      {/* O SearchWrapper é um segundo contêiner que envolve a searchbar */}
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
      <Body>
        <List 
          title="Talvez você curta"
          elements={[
            <FollowSuggestion 
              name="Twitter Support"
              nickname="@TwitterSupport"
            />,
            <FollowSuggestion 
              name="Twiter Seguro"
              nickname="@TwitterSeguroBR"
            />,
            <FollowSuggestion 
              name="Twitter Brasil"
              nickname="@TwitterBrasil"
            />,
          ]}
        />
        <List 
          title="O que está acontecendo"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />,
            <News />,
            <News />,
            <News />,
            <News />,
            <News />,
            <News />
          ]}
        />
      </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;