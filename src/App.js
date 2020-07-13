import React from 'react';
import { Row, Col, Typography, Button, Carousel } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import headerImage from './img/headerpic3.jpeg'; // Tell webpack this JS file uses this image
// import './App.css';

export default function App() {
  const headerImageStyle = {
    width: '100%',
  };
  const headerRightDiv = {
    backgroundColor: '#262626',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };
  const headerMessage = {
    color: '#fff',
    paddingBottom: 50,
  };
  const secondRow = {
    height: 200,
  };
  const thirdRow = {
    textAlign: 'center',
    height: 200,
  };
  const secondRowDiv = {
    textAlign: 'center',
    // backgroundImage: 'linear-gradient(to bottom, white 25%, #262626 120%)',
    width: '100%',
    paddingTop: 25,
    marginTop: '-110px',
    borderBottom: '100px solid white',
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    height: 0,
  };
  const titleTag = {
    paddingTop: 20,
  };
  const { Title } = Typography;

  return (
    <div>
      <div>
        <Row>
          <Col span={18}>
            <img style={headerImageStyle} src={headerImage} alt="header" />
          </Col>
          <Col span={6}>
            <div style={headerRightDiv}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <Title level={3} style={headerMessage}>
                          Architecture for the Future
                          <br />
                          focused on Sustainable Designs
                          <br />
                        </Title>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <Button shape="round" size="large">
                      <a href="#Portfolio">Portfolio</a>
                    </Button>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
        <Row style={secondRow}>
          <Col span={5} />
          <Col span={14}>
            <div style={secondRowDiv}>
              <Title style={titleTag}>The Art of Building</Title>
            </div>
          </Col>
          <Col span={5} />
        </Row>
        <a name="Portfolio" />
        <Row style={thirdRow}>
          <Col span={3} />
          <Col span={5}>
            <Carousel autoplay>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </Col>
          <Col span={8} />
          <Col span={5}>
            <Carousel autoplay>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </Col>
          <Col span={3} />
        </Row>
      </div>
    </div>
  );
}
