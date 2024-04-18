import React, {Component } from 'react';

class ColorChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textcolor: 'black',
            fontsize: '18px',
            fontStyle:'normal',
            textDecoration: 'none'
        };
        this.watermarkStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
            opacity: '0.3',
            fontFamily: 'Arial, Sans-serif',
            fontSize: '50px',
            fontStyle: 'Normal',
            color: 'gray',
        };   
        
    }
    handleColorChange = (event) => {
        this.setState({ textColor: event.target.value });
    };
    handleSizeChange =(event) => {
        this.setState({ fontStyle: event.target.value });
    };
    handleStyleChange = (event) => {
        this.setState({ fontStyle: event.target.value });
    };
    handleDecorationChange = (event) => {
        this.setState({ textDecoration: event.target.value });
    };
    render() {
        const { textColor, fontSize, fontStyle, textDecoration } = this.setState;

        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <div style={this.watermarkStyle}>Yogitha</div>
                <label htmlFor="colorPicker">Select Text Color: </label>
                <input
                    type="color"
                    id="coloPicker"
                    value={textColor}
                    onChange={this.handleColorChange}
                />

            <label htmlFor="fontSize">Select Font Size: </label>
            <input
                type="number"
                id="fontSize"
                value={parseInt(fontSize)}
                onChange={this.handleSizeChange}
            />
            <label htmlFor="fontStyle">Select Font Style</label>
            <select id="fontStyle" value={fontStyle} onChange={this.handleStyleChange}>
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
            </select>

            <label htmlFor="textDecoration">Select Text Decoration: </label>
            <select id="textDecoration" value={textDecoration} onChange={this.handleDecorationChange}>
                <option value="none">None</option>
                <option value="underline">Underline</option>
                <option value="overline">Overline</option>
                <option value="line-through">Line Through</option>
            </select>

            <div style={{ color: textColor, marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: fontSize, fontStyle: fontStyle, textDecoration: textDecoration }}>
                <h1>It's your choice, see the Magic!</h1>
            </div>
            </div>
        );
    }
}

export default ColorChanger;