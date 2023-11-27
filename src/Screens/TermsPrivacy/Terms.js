import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './Styles';
import Header from '../../Components/Header/Header';

class Terms extends Component {
  render() {
    return (
      <ScrollView style={styles.MainView}>
        <Header
          isIconTitle={true}
          backIcon="arrowleft"
          title="TERMS OF USE"
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.srcWidthWrap}>
          <Text style={styles.txtMainTitle}>
            TERMS OF USE Wheebox Online Terms of Use
          </Text>

          <Text style={styles.txtMainTitle}>1. Welcome to Wheebox!</Text>

          <Text style={styles.txtDesc}>
            Thanks for your interest in our assessment services! By using our
            Services, you agree to the 'Agreement'.
          </Text>

          <Text style={styles.txtMainTitle}>
            2. Access to the Services; Wheebox Accounts.
          </Text>

          <Text style={styles.txtDesc}>
            Your use of the Services is subject to your creation and our
            approval of Wheebox account (an "Account"). We have the right to
            refuse or limit your access to the Services. By submitting your
            registration to use our assessment and other Services, if you are an
            individual. You may only have one Account. By enrolling in Wheebox,
            you permit Wheebox to serve, as applicable, Wheebox has right to
            refuse to provide services to any assessment services under certain
            circumstances or business reasons thereof.
          </Text>

          <Text style={styles.txtMainTitle}>3. Using our Services</Text>

          <Text style={styles.txtDesc}>
            You may use our Services only as permitted by this Agreement and any
            applicable laws. Don't misuse our Services. For example, don't
            interfere with our Services, APIs or try to access them using a
            method other than the interface and the instructions that we
            provide.
          </Text>

          <Text style={styles.txtMainTitle}>
            4. Changes to our Services; Changes to the Agreement
          </Text>

          <Text style={styles.txtDesc}>
            We are constantly changing and improving our Services. We may add or
            remove functionalities or features of the Services at any time, and
            we may suspend or stop a service altogether. We may modify the
            Agreement at any time. We'll post any modifications to the Terms of
            Use on this page and any modifications to the Privacy. If you don't
            agree to any modified terms in the Agreement, you'll have to stop
            using the affected Services.
          </Text>

          <Text style={styles.txtMainTitle}>5. Intellectual Property</Text>

          <Text style={styles.txtDesc}>
            Other than as set out expressly in the Agreement, neither party will
            acquire any right, title or interest in any intellectual property
            rights belonging to the other party or to the other party's
            licensors. If Wheebox provides you with software or Application as a
            service in connection with the Services, we grant you a
            non-exclusive, non-sub licensable license for use of such software
            or Application. This license is for the sole purpose of enabling you
            to use and enjoy the benefit of the Services as provided by Wheebox.
            You may not copy, modify, distribute, sell, or lease any part of our
            Services or included software or Application, nor may you reverse
            engineer or attempt to extract the source code of that software,
            unless you have our written permission from Wheebox. You will not
            remove, obscure, or alter Wheebox copyright notice, Brand Features,
            or other proprietary rights notices affixed to or contained within
            any Wheebox services, software, Application or documentation.
          </Text>

          <Text style={styles.txtMainTitle}>6. Privacy</Text>

          <Text style={styles.txtDesc}>
            Your privacy is important at Wheebox, so we've developed a Privacy
            Policy that covers how we collect, use, disclose, transfer, and
            store your information. Please take a moment to familiarize yourself
            with our privacy practices and contact if you have any question.
            Collection and Use of Personal information data that can be used to
            uniquely identify or contact a single person. You are asked to
            provide your personal information to sign Up at Wheebox. Here are
            some examples of the types of personal information Wheebox may
            collect and how we may use it. The personal information we collect
            allows us to keep you posted on Wheebox latest product
            announcements, updates, and upcoming events. It also helps us to
            improve our services and content. We also use personal information
            to help us develop, deliver, and improve our products, services and
            content. We may also use personal information for internal purposes
            such as auditing, data analysis, and research to improve Wheebox
            products, services, and customer communications.
          </Text>

          <Text style={styles.txtMainTitle}>
            7. Integrity and Retention of Personal Information.
          </Text>

          <Text style={styles.txtDesc}>
            Wheebox makes it easy for you to keep your personal information
            accurate, complete, and up to date. We will retain your personal
            information for the period necessary to fulfil the purposes outlined
            in this Privacy Policy unless a longer retention period is required
            or permitted by law. Our Companywide Commitment to Your Privacy To
            make sure your personal information is secure, we communicate our
            privacy and security guidelines to Wheebox employees and strictly
            enforce privacy safeguards within the company by an email or updates
            by email of any change in the privacy policy.
          </Text>

          <Text style={styles.txtMainTitle}>
            8. Refund and Cancellation Policy
          </Text>

          <Text style={styles.txtDesc}>
            If you make any payment to buy detailed report using
            www.wheebox.com, the money can not be refunded. No cancellation is
            possible once you have made the payment. Once the payment is made it
            is not transferable to any other candidate.
          </Text>

          <Text style={styles.txtMainTitle}>9. Confidentiality</Text>

          <Text style={styles.txtDesc}>
            You agree not to disclose Wheebox Confidential Information without
            our prior written consent. " OTHER THAN AS EXPRESSLY SET OUT IN THE
            AGREEMENT, WE DO NOT MAKE ANY PROMISES ABOUT THE SERVICES. FOR
            EXAMPLE, WE DON'T MAKE ANY COMMITMENTS ABOUT THE CONTENT WITHIN THE
            SERVICES, THE SPECIFIC FUNCTION OF THE SERVICES, OR THEIR
            PROFITABILITY, RELIABILITY, AVAILABILITY, OR ABILITY TO MEET YOUR
            NEEDS. WE PROVIDE EACH SERVICE "AS IS". TO THE EXTENT PERMITTED BY
            LAW, WE EXCLUDE ALL WARRANTIES, EXPRESS, STATUTORY OR IMPLIED. WE
            EXPRESSLY DISCLAIM THE WARRANTIES OR CONDITIONS OF NONINFRINGEMENT,
            MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Terms;
