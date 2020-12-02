import React, { useEffect } from 'react';
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';
import styles from './styles.module.scss';

const Form = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: '8698910',
    formId: 'd42a0356-ce31-4200-8add-80be939ab4db',
    target: '#my-hubspot-form',
  });

  useEffect(() => {
    const handler = (ev) => {
      if (
        ev.data.type === 'hsFormCallback' &&
        ev.data.eventName === 'onFormReady'
      ) {
        // TODO: Melhorar isto

        const iframes = document.querySelectorAll('[id^=hs-form-iframe-]');
        if (!iframes) return;

        const iframe = iframes[0];
        const innerDoc =
          iframe.contentDocument || iframe.contentWindow.document;
        if (!innerDoc) return;

        const el = innerDoc.querySelector('form');
        const input = el.getElementsByClassName('hs-button')[0];
        input.style.background = '#277a21';
        input.style.border = 'none';
        input.style.borderRadius = '4px';
        input.style.padding = '1.25rem 3rem';
        input.style.fontSize = '1rem';
        input.style.letterSpacing = '1.2';
        input.style.fontWeight = 'normal';

        el.getElementsByClassName(
          'hubspot-link__container sproket'
        )[0].remove();
        const requireds = el.getElementsByClassName('hs-form-required');
        Array.prototype.forEach.call(requireds, function (r) {
          r.style.color = '#277a21';
        });

        const inputForm = el.getElementsByClassName('hs-input');
        Array.prototype.forEach.call(inputForm, function (r) {
          r.style.borderRadius = '4px';
        });
      }
    };
    // initiate the event handler
    window.addEventListener('message', handler);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('message', handler);
    };
  });

  return (
    <section className={styles.root}>
      <div id="my-hubspot-form" style={{ margin: 'auto' }}></div>
    </section>
  );
};

export default Form;
