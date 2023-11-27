import React, {Component} from 'react';
import {
  ScrollView,
  useWindowDimensions,
  Text,
  Dimensions,
  View,
} from 'react-native';
import HTML from 'react-native-render-html';
import TableRenderer, {tableModel} from '@native-html/table-plugin';
import WebView from 'react-native-webview';

const {width} = Dimensions.get('window');
class App extends Component {
  render() {
    // const html = `<p>Match the following</p> <table style="border-collapse:collapse; width:343pt; border:none" width="457" class=" cke_show_border"><colgroup><col style="width:343pt" width="457"></colgroup><tbody><tr height="20" style="height:15.0pt"><td class="xl63" height="20" style="border:none; height:15.0pt; width:343pt; text-align:left; vertical-align:middle; white-space:normal; padding-top:1px; padding-right:1px; padding-left:1px" width="457"><p><span style="font-size:11pt"><span style="font-weight:700"><span style="color:black"><span style="font-style:normal"><span style="text-decoration:none"><span style="font-family:Arial,sans-serif">Robot part&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Function</span></span></span></span></span></span></p></td></tr><tr><td class="xl65" height="19" style="border:none; height:14.25pt; width:343pt; text-align:left; vertical-align:middle; padding-top:1px; padding-right:1px; padding-left:1px; white-space:nowrap" width="457"><span style="font-size:11pt"><span style="color:black"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none"><span style="font-family:Arial,sans-serif"><b>a. Manipulator</b> arm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. For holding a piece or tool&nbsp;&nbsp;</span></span></span></span></span></span></td></tr><tr><td class="xl66" height="38" style="border:none; height:28.5pt; width:343pt; text-align:left; vertical-align:middle; white-space:normal; padding-top:1px; padding-right:1px; padding-left:1px" width="457"><span style="font-size:11pt"><span style="color:black"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none"><span style="font-family:Arial,sans-serif">b. Controllers&nbsp;effector&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2. Move the manipulator arm and end </span></span></span></span></span></span></td></tr><tr><td class="xl66" height="38" style="border:none; height:28.5pt; width:343pt; text-align:left; vertical-align:middle; white-space:normal; padding-top:1px; padding-right:1px; padding-left:1px" width="457"><span style="font-size:11pt"><span style="color:black"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none"><span style="font-family:Arial,sans-serif">c. Drives&nbsp;movement&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3. Number of degrees of freedom of </span></span></span></span></span></span></td></tr><tr><td class="xl66" height="38" style="border:none; height:28.5pt; width:343pt; text-align:left; vertical-align:middle; white-space:normal; padding-top:1px; padding-right:1px; padding-left:1px" width="457"><span style="font-size:11pt"><span style="color:black"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none"><span style="font-family:Arial,sans-serif">d. Gripper&nbsp;actuators&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;4. Delivers commands to the &nbsp;&nbsp;</span></span></span></span></span></span></td></tr></tbody></table>`;

    const jj = 'This is Html Part <br><h1>yasir g</h1>';

    const html = jj;
    const htmlProps = {
      WebView,
      renderers: {
        table: TableRenderer,
      },
      renderersProps: {
        table: {
          // Put the table config here
        },
      },
      customHTMLElementModels: {
        table: tableModel,
      },
    };
    return (
      <ScrollView
        style={{
          flex: 1,
          alignSelf: 'center',
        }}>
        <ScrollView horizontal={true}>
          <HTML source={{html}} {...htmlProps} contentWidth={width} />
        </ScrollView>
      </ScrollView>
    );
  }
}

export default App;
