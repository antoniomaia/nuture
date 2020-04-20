import React from 'react';
import Mailchimp from 'react-mailchimp-form';
import styles from './styles.module.scss';


const SubscribeInput = () => {
  return (
    <section className={styles.mailchimp}>
      <Mailchimp
        action="https://earth.us4.list-manage.com/subscribe/post?u=3edb599a903504d7d77bbe3f7&amp;id=bb7f9aec1c"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true,
          },
        ]}
      />
    </section>
  );
};

export default SubscribeInput;
