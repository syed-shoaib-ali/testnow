import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './Styles';
import Header from '../../Components/Header/Header';

class Privacy extends Component {
  render() {
    return (
      <ScrollView style={styles.MainView}>
        <Header
          isIconTitle={true}
          backIcon="arrowleft"
          title="Privacy Policy"
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.srcWidthWrap}>
          <Text style={styles.txtDesc}>
            Your privacy is important at Wheebox, So we've developed a Privacy
            Policy that covers how we collect, use, disclose, transfer, and
            store your information. Please take a moment to familiarize yourself
            with our privacy practices and contact if you have any questions.
            Collection and Use of Personal information data that can be used to
            uniquely identify or contact a single person. You are asked to
            provide your personal information to sign Up at Wheebox. Here are
            some examples of the types of personal information WHEEBOX may
            collect and how we may use it.
          </Text>
          <Text style={styles.txtMainTitle}>
            How we use your personal information
          </Text>

          <Text style={styles.txtDesc}>
            The personal information we collect allows us to keep you posted on
            Wheebox's latest product announcements, updates, and upcoming
            events. It also helps us to improve our services and content. We
            also use personal information to help us develop, deliver, and
            improve our products, services, and content. We may also use
            personal information for internal purposes such as auditing, data
            analysis, and research to improve Wheebox products, services, and
            customer communications. Disclosure to Third Parties that Wheebox
            partners for conducting assessments for them and Wheebox may make
            certain personal information available of the user or users provided
            by that customer to access the report, result, or any data that may
            be used for recruitment, development, certification or any other
            similar insight. For example, when you subscribe and activate your
            Wheebox account, you authorize Wheebox and its carrier to exchange
            the information you provide during the activation process to carry
            out the delivery service. If you are approved for service, your
            account will be governed by Wheebox and its delivery partners'
            respective privacy policies. Personal information will only be
            shared by WHEEBOX to provide or improve our products and services.
            It will not be shared with third parties for their marketing
            purposes. It may be necessary by law, legal process, litigation,
            and/or requests from public and governmental authorities within or
            outside your country of residence - for Wheebox to disclose your
            personal information. We may also disclose information about you if
            we determine that for purposes of national security, law
            enforcement, or other issues of public importance, disclosure is
            necessary or appropriate. Protection of Personal Information Wheebox
            takes precautions - including administrative, technical, and
            physical measures - to safeguard your personal information against
            loss, theft, and misuse, as well as against unauthorized access,
            disclosure, alteration, and destruction.
          </Text>

          <Text style={styles.txtMainTitle}>
            Integrity and Retention of Personal Information
          </Text>
          <Text style={styles.txtDesc}>
            Wheebox makes it easy for you to keep your personal information
            accurate, complete, and up to date. We will retain your personal
            information for the period necessary to fulfill the purposes
            outlined in this Privacy Policy unless a longer retention period is
            required or permitted by law. Our Companywide Commitment to Your
            Privacy To make sure your personal information is secure, we
            communicate our privacy and security guidelines to Wheebox employees
            and strictly enforce privacy safeguards within the company by email
            or updates by email of any change in the privacy policy.
          </Text>

          <Text style={styles.txtMainTitle}>
            Collection and use of your personal information
          </Text>

          <Text style={styles.txtDesc}>
            The remote proctoring solution may have the requirement to collect
            images or information from you while offering distributed assessment
            services. With regard to security, Personal Information from you
            while offering assessment services due to the nature of the
            conducting secured and proctored assessment services being offered.
            SPDI shall have the meaning in accordance with the Information
            Technology (Reasonable security practices and procedures and
            sensitive personal data or Information), With regard to security, we
            respect all information provided to us, and take all reasonable
            steps towards protection of the same. We have implemented technology
            and policies, with the objective of protecting your privacy from
            unauthorized access and improper use, and periodically review the
            same. We maintain procedural safeguards to protect the
            confidentiality and security of personally identifiable information
            transmitted to us.
          </Text>

          <Text style={styles.txtMainTitle}>Laws specific to India</Text>

          <Text style={styles.txtDesc}>
            In the case where Wheebox is an intermediary between the client and
            consumer. Whereas a client herein is the agency that assigns work to
            Wheebox to collect personal while registration for conducting an
            assessment on behalf of the client for a certain test or a series of
            tests for a specific role or roles to be used for client’s
            requirement. Under Section 79 of the IT Act, intermediaries are
            exempt from liability under the Act in respect of any third-party
            information, data, or communication link made available or hosted by
            them. The storage and purge policy of the data, information, or
            processing to be directed by the client. Clients are hereby supposed
            to store data temporarily or permanently based on requirements and
            Wheebox is not liable for storing data indefinitely for any client
            or assessment.
          </Text>

          <Text style={styles.txtMainTitle}>Privacy Questions</Text>
          <Text style={styles.txtDesc}>
            If you have questions or concerns about WHEEBOX Privacy Policy or
            data processing, please contact us at info@wheebox.com.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Privacy;
