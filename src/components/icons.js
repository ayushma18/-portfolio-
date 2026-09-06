import React from 'react';
import {
  FaBrain,
  FaCode,
  FaLayerGroup,
  FaServer,
  FaNetworkWired,
  FaToolbox,
  FaWaveSquare,
} from 'react-icons/fa';

/**
 * Maps the icon names used in `data/profile.js` to components, so the data
 * file stays free of JSX and imports.
 */
const iconMap = {
  brain: FaBrain,
  code: FaCode,
  layers: FaLayerGroup,
  server: FaServer,
  network: FaNetworkWired,
  tools: FaToolbox,
  waveform: FaWaveSquare,
};

const Icon = ({ name, ...rest }) => {
  const Component = iconMap[name];
  return Component ? <Component aria-hidden="true" {...rest} /> : null;
};

export default Icon;
