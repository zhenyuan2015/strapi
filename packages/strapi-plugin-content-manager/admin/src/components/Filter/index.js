/**
 *
 * Filter
 */


import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { toString, upperFirst } from 'lodash';
import Flex from './Flex';
import Remove from './Remove';
import Separator from './Separator';


function Filter({ filter, index, onClick }) {
  return (
    <Flex>
      <span>{upperFirst(filter.attr)}&nbsp;</span>
      <FormattedMessage id={`content-manager.components.FilterOptions.FILTER_TYPES.${filter.filter}`} />
      <span>&nbsp;{toString(filter.value)}</span>
      <Separator />
      <Remove onClick={() => onClick(index)} />
    </Flex>
  );
}

Filter.defaultProps = {
  filter: {},
  index: 0,
  onClick: () => {},
};

Filter.propTypes = {
  filter: PropTypes.object,
  index: PropTypes.number,
  onClick: PropTypes.func,
};

export default Filter;