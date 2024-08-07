import React from 'react';
import { colors } from '../../packages/core/lib'; // Assuming the colors object is exported from a separate file

const ColorSwatch = ({ colorName, colorValue }) => (
  <div
    style={{
      width: '100%',
      height: '40px',
      backgroundColor: colorValue,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 10px',
      color: parseInt(colorName.split('-')[1]) > 50 ? 'white' : 'black',
      fontSize: '14px',
    }}
  >
    <span>{colorName}</span>
    <span>{colorValue.toUpperCase()}</span>
  </div>
);

const ColorGroup = ({ title, colors }) => (
  <div
    style={{
      width: 'calc(16.666% - 10px)',
      margin: '5px',
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}
  >
    <div style={{ padding: '10px', fontWeight: 'bold' }}>{title}</div>
    {Object.entries(colors).map(([name, value]) => (
      <ColorSwatch key={name} colorName={name} colorValue={value} />
    ))}
  </div>
);

const ColorPalette = () => {
  const colorGroups = {
    Primary: {
      Primary: colors.primary,
      'Primary-0': colors.primary0,
      'Primary-5': colors.primary5,
      'Primary-10': colors.primary10,
      'Primary-20': colors.primary20,
      'Primary-30': colors.primary30,
      'Primary-40': colors.primary40,
      'Primary-50': colors.primary50,
      'Primary-60': colors.primary60,
      'Primary-70': colors.primary70,
      'Primary-80': colors.primary80,
      'Primary-90': colors.primary90,
      'Primary-100': colors.primary100,
    },
    Secondary: {
      Secondary: colors.secondary,
      'Secondary-0': colors.secondary0,
      'Secondary-5': colors.secondary5,
      'Secondary-10': colors.secondary10,
      'Secondary-20': colors.secondary20,
      'Secondary-30': colors.secondary30,
      'Secondary-40': colors.secondary40,
      'Secondary-50': colors.secondary50,
      'Secondary-60': colors.secondary60,
      'Secondary-70': colors.secondary70,
      'Secondary-80': colors.secondary80,
      'Secondary-90': colors.secondary90,
      'Secondary-100': colors.secondary100,
    },
    Gray: {
      'Gray-0': colors.gray0,
      'Gray-5': colors.gray5,
      'Gray-10': colors.gray10,
      'Gray-20': colors.gray20,
      'Gray-30': colors.gray30,
      'Gray-40': colors.gray40,
      'Gray-50': colors.gray50,
      'Gray-60': colors.gray60,
      'Gray-70': colors.gray70,
      'Gray-80': colors.gray80,
      'Gray-90': colors.gray90,
      'Gray-100': colors.gray100,
    },
    Point: {
      Point: colors.point,
      'Point-0': colors.point0,
      'Point-5': colors.point5,
      'Point-10': colors.point10,
      'Point-20': colors.point20,
      'Point-30': colors.point30,
      'Point-40': colors.point40,
      'Point-50': colors.point50,
      'Point-60': colors.point60,
      'Point-70': colors.point70,
      'Point-80': colors.point80,
      'Point-90': colors.point90,
      'Point-100': colors.point100,
    },
    Danger: {
      Danger: colors.danger,
      'Danger-5': colors.danger5,
      'Danger-10': colors.danger10,
      'Danger-20': colors.danger20,
      'Danger-30': colors.danger30,
      'Danger-40': colors.danger40,
      'Danger-50': colors.danger50,
      'Danger-60': colors.danger60,
      'Danger-70': colors.danger70,
      'Danger-80': colors.danger80,
      'Danger-90': colors.danger90,
    },
    Warning: {
      Warning: colors.warning,
      'Warning-5': colors.warning5,
      'Warning-10': colors.warning10,
      'Warning-20': colors.warning20,
      'Warning-30': colors.warning30,
      'Warning-40': colors.warning40,
      'Warning-50': colors.warning50,
      'Warning-60': colors.warning60,
      'Warning-70': colors.warning70,
      'Warning-80': colors.warning80,
      'Warning-90': colors.warning90,
    },
    Success: {
      Success: colors.success,
      'Success-5': colors.success5,
      'Success-10': colors.success10,
      'Success-20': colors.success20,
      'Success-30': colors.success30,
      'Success-40': colors.success40,
      'Success-50': colors.success50,
      'Success-60': colors.success60,
      'Success-70': colors.success70,
      'Success-80': colors.success80,
      'Success-90': colors.success90,
    },
    Info: {
      Info: colors.info,
      'Info-5': colors.info5,
      'Info-10': colors.info10,
      'Info-20': colors.info20,
      'Info-30': colors.info30,
      'Info-40': colors.info40,
      'Info-50': colors.info50,
      'Info-60': colors.info60,
      'Info-70': colors.info70,
      'Info-80': colors.info80,
      'Info-90': colors.info90,
    },
    Navy: {
      'navy-5': colors.navy5,
      'navy-10': colors.navy10,
      'navy-20': colors.navy20,
      'navy-30': colors.navy30,
      'navy-40': colors.navy40,
      'navy-50': colors.navy50,
      'navy-60': colors.navy60,
      'navy-70': colors.navy70,
      'navy-80': colors.navy80,
      'navy-90': colors.navy90,
    },
    Blue: {
      'blue-5': colors.blue5,
      'blue-10': colors.blue10,
      'blue-20': colors.blue20,
      'blue-30': colors.blue30,
      'blue-40': colors.blue40,
      'blue-50': colors.blue50,
      'blue-60': colors.blue60,
      'blue-70': colors.blue70,
      'blue-80': colors.blue80,
      'blue-90': colors.blue90,
    },
    'Royal Blue': {
      'royalBlue-5': colors.royalBlue5,
      'royalBlue-10': colors.royalBlue10,
      'royalBlue-20': colors.royalBlue20,
      'royalBlue-30': colors.royalBlue30,
      'royalBlue-40': colors.royalBlue40,
      'royalBlue-50': colors.royalBlue50,
      'royalBlue-60': colors.royalBlue60,
      'royalBlue-70': colors.royalBlue70,
      'royalBlue-80': colors.royalBlue80,
      'royalBlue-90': colors.royalBlue90,
    },
    'Sky Blue': {
      'skyBlue-5': colors.skyBlue5,
      'skyBlue-10': colors.skyBlue10,
      'skyBlue-20': colors.skyBlue20,
      'skyBlue-30': colors.skyBlue30,
      'skyBlue-40': colors.skyBlue40,
      'skyBlue-50': colors.skyBlue50,
      'skyBlue-60': colors.skyBlue60,
      'skyBlue-70': colors.skyBlue70,
      'skyBlue-80': colors.skyBlue80,
      'skyBlue-90': colors.skyBlue90,
    },
    Aqua: {
      'aqua-5': colors.aqua5,
      'aqua-10': colors.aqua10,
      'aqua-20': colors.aqua20,
      'aqua-30': colors.aqua30,
      'aqua-40': colors.aqua40,
      'aqua-50': colors.aqua50,
      'aqua-60': colors.aqua60,
      'aqua-70': colors.aqua70,
      'aqua-80': colors.aqua80,
      'aqua-90': colors.aqua90,
    },
    Teal: {
      'teal-5': colors.teal5,
      'teal-10': colors.teal10,
      'teal-20': colors.teal20,
      'teal-30': colors.teal30,
      'teal-40': colors.teal40,
      'teal-50': colors.teal50,
      'teal-60': colors.teal60,
      'teal-70': colors.teal70,
      'teal-80': colors.teal80,
      'teal-90': colors.teal90,
    },
    Green: {
      'green-5': colors.green5,
      'green-10': colors.green10,
      'green-20': colors.green20,
      'green-30': colors.green30,
      'green-40': colors.green40,
      'green-50': colors.green50,
      'green-60': colors.green60,
      'green-70': colors.green70,
      'green-80': colors.green80,
      'green-90': colors.green90,
    },
    'Lime Green': {
      'limeGreen-5': colors.limeGreen5,
      'limeGreen-10': colors.limeGreen10,
      'limeGreen-20': colors.limeGreen20,
      'limeGreen-30': colors.limeGreen30,
      'limeGreen-40': colors.limeGreen40,
      'limeGreen-50': colors.limeGreen50,
      'limeGreen-60': colors.limeGreen60,
      'limeGreen-70': colors.limeGreen70,
      'limeGreen-80': colors.limeGreen80,
      'limeGreen-90': colors.limeGreen90,
    },
    Lime: {
      'lime-5': colors.lime5,
      'lime-10': colors.lime10,
      'lime-20': colors.lime20,
      'lime-30': colors.lime30,
      'lime-40': colors.lime40,
      'lime-50': colors.lime50,
      'lime-60': colors.lime60,
      'lime-70': colors.lime70,
      'lime-80': colors.lime80,
      'lime-90': colors.lime90,
    },
    Olive: {
      'olive-5': colors.olive5,
      'olive-10': colors.olive10,
      'olive-20': colors.olive20,
      'olive-30': colors.olive30,
      'olive-40': colors.olive40,
      'olive-50': colors.olive50,
      'olive-60': colors.olive60,
      'olive-70': colors.olive70,
      'olive-80': colors.olive80,
      'olive-90': colors.olive90,
    },
    Yellow: {
      'yellow-5': colors.yellow5,
      'yellow-10': colors.yellow10,
      'yellow-20': colors.yellow20,
      'yellow-30': colors.yellow30,
      'yellow-40': colors.yellow40,
      'yellow-50': colors.yellow50,
      'yellow-60': colors.yellow60,
      'yellow-70': colors.yellow70,
      'yellow-80': colors.yellow80,
      'yellow-90': colors.yellow90,
    },
    Gold: {
      'gold-5': colors.gold5,
      'gold-10': colors.gold10,
      'gold-20': colors.gold20,
      'gold-30': colors.gold30,
      'gold-40': colors.gold40,
      'gold-50': colors.gold50,
      'gold-60': colors.gold60,
      'gold-70': colors.gold70,
      'gold-80': colors.gold80,
      'gold-90': colors.gold90,
    },
    'Saddle Brown': {
      'saddleBrown-5': colors.saddleBrown5,
      'saddleBrown-10': colors.saddleBrown10,
      'saddleBrown-20': colors.saddleBrown20,
      'saddleBrown-30': colors.saddleBrown30,
      'saddleBrown-40': colors.saddleBrown40,
      'saddleBrown-50': colors.saddleBrown50,
      'saddleBrown-60': colors.saddleBrown60,
      'saddleBrown-70': colors.saddleBrown70,
      'saddleBrown-80': colors.saddleBrown80,
      'saddleBrown-90': colors.saddleBrown90,
    },
    Brown: {
      'brown-5': colors.brown5,
      'brown-10': colors.brown10,
      'brown-20': colors.brown20,
      'brown-30': colors.brown30,
      'brown-40': colors.brown40,
      'brown-50': colors.brown50,
      'brown-60': colors.brown60,
      'brown-70': colors.brown70,
      'brown-80': colors.brown80,
      'brown-90': colors.brown90,
    },
    'Dark Red': {
      'darkRed-5': colors.darkRed5,
      'darkRed-10': colors.darkRed10,
      'darkRed-20': colors.darkRed20,
      'darkRed-30': colors.darkRed30,
      'darkRed-40': colors.darkRed40,
      'darkRed-50': colors.darkRed50,
      'darkRed-60': colors.darkRed60,
      'darkRed-70': colors.darkRed70,
      'darkRed-80': colors.darkRed80,
      'darkRed-90': colors.darkRed90,
    },
    Red: {
      'red-5': colors.red5,
      'red-10': colors.red10,
      'red-20': colors.red20,
      'red-30': colors.red30,
      'red-40': colors.red40,
      'red-50': colors.red50,
      'red-60': colors.red60,
      'red-70': colors.red70,
      'red-80': colors.red80,
      'red-90': colors.red90,
    },
    Orange: {
      'orange-5': colors.orange5,
      'orange-10': colors.orange10,
      'orange-20': colors.orange20,
      'orange-30': colors.orange30,
      'orange-40': colors.orange40,
      'orange-50': colors.orange50,
      'orange-60': colors.orange60,
      'orange-70': colors.orange70,
      'orange-80': colors.orange80,
      'orange-90': colors.orange90,
    },
    Coral: {
      'coral-5': colors.coral5,
      'coral-10': colors.coral10,
      'coral-20': colors.coral20,
      'coral-30': colors.coral30,
      'coral-40': colors.coral40,
      'coral-50': colors.coral50,
      'coral-60': colors.coral60,
      'coral-70': colors.coral70,
      'coral-80': colors.coral80,
      'coral-90': colors.coral90,
    },
    Salmon: {
      'salmon-5': colors.salmon5,
      'salmon-10': colors.salmon10,
      'salmon-20': colors.salmon20,
      'salmon-30': colors.salmon30,
      'salmon-40': colors.salmon40,
      'salmon-50': colors.salmon50,
      'salmon-60': colors.salmon60,
      'salmon-70': colors.salmon70,
      'salmon-80': colors.salmon80,
      'salmon-90': colors.salmon90,
    },
    'Hot Pink': {
      'hotPink-5': colors.hotPink5,
      'hotPink-10': colors.hotPink10,
      'hotPink-20': colors.hotPink20,
      'hotPink-30': colors.hotPink30,
      'hotPink-40': colors.hotPink40,
      'hotPink-50': colors.hotPink50,
      'hotPink-60': colors.hotPink60,
      'hotPink-70': colors.hotPink70,
      'hotPink-80': colors.hotPink80,
      'hotPink-90': colors.hotPink90,
    },
    Pink: {
      'pink-5': colors.pink5,
      'pink-10': colors.pink10,
      'pink-20': colors.pink20,
      'pink-30': colors.pink30,
      'pink-40': colors.pink40,
      'pink-50': colors.pink50,
      'pink-60': colors.pink60,
      'pink-70': colors.pink70,
      'pink-80': colors.pink80,
      'pink-90': colors.pink90,
    },
    Fuchsia: {
      'fuchsia-5': colors.fuchsia5,
      'fuchsia-10': colors.fuchsia10,
      'fuchsia-20': colors.fuchsia20,
      'fuchsia-30': colors.fuchsia30,
      'fuchsia-40': colors.fuchsia40,
      'fuchsia-50': colors.fuchsia50,
      'fuchsia-60': colors.fuchsia60,
      'fuchsia-70': colors.fuchsia70,
      'fuchsia-80': colors.fuchsia80,
      'fuchsia-90': colors.fuchsia90,
    },
    Purple: {
      'purple-5': colors.purple5,
      'purple-10': colors.purple10,
      'purple-20': colors.purple20,
      'purple-30': colors.purple30,
      'purple-40': colors.purple40,
      'purple-50': colors.purple50,
      'purple-60': colors.purple60,
      'purple-70': colors.purple70,
      'purple-80': colors.purple80,
      'purple-90': colors.purple90,
    },
    'Blue Violet': {
      'blueViolet-5': colors.blueViolet5,
      'blueViolet-10': colors.blueViolet10,
      'blueViolet-20': colors.blueViolet20,
      'blueViolet-30': colors.blueViolet30,
      'blueViolet-40': colors.blueViolet40,
      'blueViolet-50': colors.blueViolet50,
      'blueViolet-60': colors.blueViolet60,
      'blueViolet-70': colors.blueViolet70,
      'blueViolet-80': colors.blueViolet80,
      'blueViolet-90': colors.blueViolet90,
    },
  };
  return (
    <div
      style={{
        padding: '24px',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}
      >
        Color Palette
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '-5px' }}>
        {Object.entries(colorGroups).map(([title, groupColors]) => (
          <ColorGroup key={title} title={title} colors={groupColors} />
        ))}
      </div>
    </div>
  );
};

export default {
  title: 'Design System/Color Palette',
  component: ColorPalette,
};

export const Default = () => <ColorPalette />;
