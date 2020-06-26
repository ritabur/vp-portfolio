import * as React from 'react';
import styled from 'styled-components';

import { Box } from 'components/Box';
import { Base } from 'components/Base';
import { ContentBoxThumbnail } from 'components/ContentBox';

const H2 = styled.h2`
  margin-bottom: 12px;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const Thumbnails = styled(Box)`
  background-color: ${props => props.theme.colors.contentBackground};
`;

export const ThumbnailList = ({ contentList, title, content }) => {
  return (
    <Thumbnails py={[0, 32, 40]} px={[18, 75, 84]}>
      {contentList.map(({ largeImage }) => (
        <Box pt={[24, 30]} pb={[24, 30]} key={largeImage.title}>
          <ContentBoxThumbnail
            image={largeImage.image.childImageSharp.fluid}
            alt={largeImage.title}
          >
            <H2>{title}</H2>
            <Base content={content} />
          </ContentBoxThumbnail>
        </Box>
      ))}
    </Thumbnails>
  );
};
