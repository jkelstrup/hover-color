import { useState, useEffect } from 'react';
import colortools, { createColor } from './colortools';
import styled from 'styled-components/macro';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Demo = styled.div`
  width: 320px;
  height: 560px;
  font-family: system-ui;
  border-radius: 1em;
  box-shadow: 0 2px 4px rgba(0,0,0,.1), 0 8px 24px rgba(0,0,0,.1);
  margin: 2em auto;
  overflow: hidden;

  ul {
    list-style: none;
    padding: 1em;
    margin: 0;
  }

  li {
    padding: 1em;
    border-radius: .5em;

  }
`;

const DemoMain = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1em;
`;

const DemoButtonBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${ props => props.show ? 1 : 0 };
`;

const DemoButtonHoverBg = styled(DemoButtonBg)``;
const DemoButtonActiveBg = styled(DemoButtonBg)``;

const DemoButtonContainer = styled.div`
  position: relative;
  display: flex;
  height: 40px;
  border-radius: .5em;
  overflow: hidden;
  cursor: pointer;
  min-width: 40px;


  &:hover {
    ${DemoButtonHoverBg} {
      opacity: 1;
    }
  }

  &:active {
    ${DemoButtonActiveBg} {
      opacity: 1;
    }
    ${DemoButtonHoverBg} {
      opacity: 0;
    }
  }
`;

const DemoButtonLabel = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: .5em;
  align-items: center;
`;

const DemoButton = ({hoverBg,activeBg,children,hover,active}) => {

  return (
    <DemoButtonContainer>
      { !active && <DemoButtonHoverBg show={hover} style={{background: hoverBg.hsla}}/> }
      { !hover && <DemoButtonActiveBg show={active} style={{background: activeBg.hsla}}/> }
      <DemoButtonLabel>{children}</DemoButtonLabel>
    </DemoButtonContainer>
  )
}

const DemoHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: .5em;
`;

const DemoTitle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 1em;
`;

const StyledColorChip = styled.div`
  width: 160px;
  height: 100%;
  color: ${ props => props.color.pLight > .5 ? "rgba(0,0,0,.5)" : "rgba(255,255,255,.5)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${ props => props.color[props.color.src + "a"] || "gray"};
`;

const ColorChip = ({color}) => {

  return (
    <StyledColorChip color={color} onClick={() => console.log(color)}>
      <code>{color.hex}</code>
      <code>{color.pLight}</code>
      <code>S: {color.s}</code>
    </StyledColorChip>
  )
}

const ColorThingContainer = styled.div`
  display: flex;
  flex-direction: ${ props => props.test ? "row" : "row-reverse"};
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const Sliders = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1em;
  flex-direction: column;
`;

const ColorThing = ({color,setColor,test,label}) => {
  return (
    <ColorThingContainer test={test}>
      <h3>{label}</h3>
      <Sliders>
        <Row>
          <div>
            <code>H: {color.h}</code><br/>
            <input type="range" min="0" max="360" value={color.h} onChange={(e) => setColor(colortools.redefine(color,{h: parseInt(e.target.value)}))}/><br/>
            <code>S: {color.s}</code><br/>
            <input type="range" min="0" max="100" value={color.s} onChange={(e) => setColor(colortools.redefine(color,{s: parseInt(e.target.value)}))}/><br/>
            <code>L: {color.l}</code><br/>
            <input type="range" min="0" max="100" value={color.l} onChange={(e) => setColor(colortools.redefine(color,{l: parseInt(e.target.value)}))}/>
          </div>
          <div>
            <code>R: {color.r}</code><br/>
            <input type="range" min="0" max="255" value={color.r} onChange={(e) => setColor(colortools.redefine(color,{r: parseInt(e.target.value)}))}/><br/>
            <code>G: {color.g}</code><br/>
            <input type="range" min="0" max="255" value={color.g} onChange={(e) => setColor(colortools.redefine(color,{g: parseInt(e.target.value)}))}/><br/>
            <code>B: {color.b}</code><br/>
            <input type="range" min="0" max="255" value={color.b} onChange={(e) => setColor(colortools.redefine(color,{b: parseInt(e.target.value)}))}/>
          </div>
        </Row>
        <div style={{textAlign: "center"}}>
          <input value={color.hex} onChange={(e) => setColor(createColor(e.target.value))}/>
        </div>
      </Sliders>
      <ColorChip color={color}/>
    </ColorThingContainer>
  )
}

export default function App() {
  const [ mainBg, setMainBg ] = useState(createColor("#FFFFFF"));
  const [ mainFg, setMainFg ] = useState(createColor("#1A1A1A"));
  const [ accentBg, setAccentBg ] = useState(createColor("#3D3DFF"));
  const [ accentFg, setAccentFg ] = useState(createColor("#FFFFFF"));

  const [ mainHo, setMainHo ] = useState(createColor());
  const [ mainAc, setMainAc ] = useState(createColor());
  const [ accentHo, setAccentHo ] = useState(createColor());
  const [ accentAc, setAccentAc ] = useState(createColor());

  const [ blackOpa, setBlackOpa ] = useState(.18);
  const [ whiteOpa, setWhiteOpa ] = useState(.05);

  function flipAccent() {
    let tmpAccentBg = accentBg;
    setAccentBg(accentFg);
    setAccentFg(tmpAccentBg);
  }

  function flipMain() {
    let tmpMainBg = mainBg;
    setMainBg(mainFg);
    setMainFg(tmpMainBg);
  }

  function flipBackgroundForeground() {
    let tmpMainBg = mainBg;
    setMainBg(mainFg);
    setMainFg(tmpMainBg);
    let tmpAccentBg = accentBg;
    setAccentBg(accentFg);
    setAccentFg(tmpAccentBg);
  }

  function flipAccentMain() {
    let tmpMainBg = mainBg;
    setMainBg(accentBg);
    setAccentBg(tmpMainBg);

    let tmpMainFg = mainFg;
    setMainFg(accentFg);
    setAccentFg(tmpMainFg);
  }

  function flipAllTheThings() {
    let tmpMainBg = mainBg;
    setMainBg(accentFg);
    setAccentFg(tmpMainBg);

    let tmpMainFg = mainFg;
    setMainFg(accentBg);
    setAccentBg(tmpMainFg)
  }

  function pureMagic(fg,bg) {
    const BLACK_ON_WHITE_OPACITY = 0.05;
    const WHITE_ON_BLACK_OPACITY = 0.15;

    // Alright. The goal here is to determine a nice opacity for the foreground color (fg) on a background color (bg).
    // First of all, we've decided on the extremes: Pure black on pure white should result in BLACK_ON_WHITE_OPACITY
    // and pure white on pure black should result in WHITE_ON_BLACK_OPACITY. So far so good.

    // The problem is that, believe it or not, there are more colors in between pure black and pure white.
    // The closer they are together the higher the opacity should be, for it to have a proper effect.
    // We use perceived lightness (pLight) to determine how "close" the two colors are.
    // What we want is to approach an opacity of 1 (not at all transparent) if the 2 colors have the same perceived lightness.

    // With that, let's start by determining where we are between those extremes.
    // This returns a number between 0 and 1 where
    // 0.0 = Black on White extreme
    // 1.0 = White on Black extreme
    // 0.5 = Equal perceived lightness
    let scalePosition = ( 1 - (bg-fg) ) / 2;

    // We can now translate the scalePosition to it's opacity:
    let baseOpacity = scalePosition * (WHITE_ON_BLACK_OPACITY - BLACK_ON_WHITE_OPACITY) + BLACK_ON_WHITE_OPACITY;

    // But as mentioned above, we want to account for equalness.
    // So let's determine the equalness.
    // This returns a number between 0 and 1 where
    // 0.0 = One of the two extremes, black on white or vice versa.
    // 1.0 = Equal perceived lightness.
    // 0.n = Somewhere in between.
    let equalness = 1 - Math.abs(bg-fg);
  
    // We can now figure out how much we need to correct the baseOpacity towards 1.
    // Let's multiply the distance from our baseOpacity to 1 with our equalness.
    let correctionForEqualness = (1 - baseOpacity) * equalness;

    // ... and finally add the correction to the baseOpacity.
    let magicOpacity = baseOpacity + correctionForEqualness

    // We're done! Let's round things off.
    return Math.round(magicOpacity*1000)/1000;
  }

  // EFFECT COLORS FOR __MAIN__
  useEffect(() => {    
    let hoverOpacity = blackOpa - (blackOpa-whiteOpa) * mainBg.pLight; // Setting the base opacity based on the background

    // Deciding which color to use for the hover color:
    let colorToUse = mainFg;

    if (accentBg.s > colorToUse.s) { // Accent Background has more saturation! Let's use that.
      colorToUse = accentBg;
    }

    if (accentFg.s > colorToUse.s) { // Accent Foreground has even more saturation! Let's use that.
      colorToUse = accentFg;
    }

    hoverOpacity = hoverOpacity * (2 - colorToUse.pLight); // Tweak the opacity with MAGIC!

    hoverOpacity = Math.round(hoverOpacity*100)/100; // Round things off to a nice 2 decimals
    
    let activeOpacity = Math.min(1,hoverOpacity*1.5); // Give active state a bit more
    activeOpacity = Math.round(activeOpacity*100)/100; // We'll round this off as well.

    setMainHo(colortools.redefine(colorToUse,{a: hoverOpacity}));
    setMainAc(colortools.redefine(colorToUse,{a: activeOpacity}));

  },[accentBg, accentFg, blackOpa, mainBg.pLight, mainFg, whiteOpa])

  // EFFECT COLORS FOR __ACCENT__
  useEffect(() => {
    let hoverOpacity = blackOpa - (blackOpa-whiteOpa) * accentBg.pLight; // Setting the base opacity based on the background
    hoverOpacity = Math.round(hoverOpacity*100)/100; // Round things off to a nice 2 decimals
    
    let activeOpacity = Math.min(1,hoverOpacity*1.5); // Give active state a bit more
    activeOpacity = Math.round(activeOpacity*100)/100; // We'll round this off as well.

    setAccentHo(colortools.redefine(accentFg,{a: hoverOpacity}));
    setAccentAc(colortools.redefine(accentFg,{a: activeOpacity}));

  },[accentBg.pLight, accentFg, blackOpa, whiteOpa])



  useEffect(() => {
    console.log("pureMagic:",pureMagic(accentFg.pLight,accentBg.pLight));
  })



  return (
    <Row>
      <Col>
        <Col>
          <h1>Magic Hover Color Thing</h1>
          <Row>
            <ColorThing color={accentBg} setColor={setAccentBg} label="Accent Background" test/>
            <ColorThing color={accentFg} setColor={setAccentFg} label="Accent Foreground" />
          </Row>
          <Row>
            <ColorThing color={mainBg} setColor={setMainBg} label="Main Background" test />
            <ColorThing color={mainFg} setColor={setMainFg} label="Main Foreground" />
          </Row>
        </Col>
        <Row>
          <div style={{flex: "1"}}>
            <code>Base opacity on WHITE: {whiteOpa}</code><br/>
            <input type="range" min="0" max="50" value={whiteOpa*100} onChange={(e) => setWhiteOpa(e.target.value/100)}/><br/>
            <code>Base opacity on BLACK: {blackOpa}</code><br/>
            <input type="range" min="0" max="50" value={blackOpa*100} onChange={(e) => setBlackOpa(e.target.value/100)}/><br/>
            Accent hover: {accentHo.hsla}<br/>
            Accent active: {accentAc.hsla}<br/>
            <br/>
            Main hover: {mainHo.hsla}<br/>
            Main active: {mainAc.hsla}
          </div>
          <Demo style={{background: mainBg.hex, color: mainFg.hex}}>
            <DemoHeader style={{background: accentBg.hex, color: accentFg.hex}}>
              <DemoTitle>Header</DemoTitle>
              <DemoButton hoverBg={accentHo} activeBg={accentAc}>No</DemoButton>
              <DemoButton hoverBg={accentHo} activeBg={accentAc}>No</DemoButton>
              <DemoButton hoverBg={accentHo} activeBg={accentAc} hover>Ho</DemoButton>
              <DemoButton hoverBg={accentHo} activeBg={accentAc}>No</DemoButton>
              <DemoButton hoverBg={accentHo} activeBg={accentAc} active>Ac</DemoButton>
            </DemoHeader>
            <DemoMain>
              <DemoButton hoverBg={mainHo} activeBg={mainAc}>Normal ipsum</DemoButton>
              <DemoButton hoverBg={mainHo} activeBg={mainAc}>Normal ipsum</DemoButton>
              <DemoButton hoverBg={mainHo} activeBg={mainAc} hover>Hover ipsum</DemoButton>
              <DemoButton hoverBg={mainHo} activeBg={mainAc}>Lorem ipsum</DemoButton>
              <DemoButton hoverBg={mainHo} activeBg={mainAc} active>Active ipsum</DemoButton>
            </DemoMain>
          </Demo>
          <div style={{flex: "1", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center"}}>
            <button onClick={() => flipAccent()}>Flip Accent colors!</button><br/>
            <button onClick={() => flipMain()}>Flip Main colors!</button><br/>
            <button onClick={() => flipBackgroundForeground()}>Flip background and foreground!</button><br/>
            <button onClick={() => flipAccentMain()}>Flip Accent and Main colors!</button><br/>
            <button onClick={() => {flipAllTheThings()}}>FLIP ALL THE THINGS!</button><br/>
          </div>
        </Row>
      </Col>
    </Row>
    
    
  );
}