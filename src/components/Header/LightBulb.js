import React, { Fragment, useState } from 'react';
import { LightBulbSvg } from './LightBulbSvg';

export const LightBulb = () => {
  let [light, setLight] = useState(0);

  const setOff = () => setLight(0);
  const setOn = () => setLight(1);

  let fillColor = light === 1 ? '#fff270' : '#bababa';

  return (
    <Fragment>
      <LightBulbSvg setOn={setOn} setOff={setOff} fillColor={fillColor} />
    </Fragment>
  );
};
