import React, {useEffect} from 'react';
import useHubspotForm from '@aaronhayes/react-use-hubspot-form';
import styles from './styles.module.scss';

const FormPage = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: '8698910',
    formId: 'd42a0356-ce31-4200-8add-80be939ab4db',
    target: '#my-hubspot-form'
  });

    useEffect(() => {
        const handler = ev => {
            if(ev.data.type === 'hsFormCallback' && ev.data.eventName === 'onFormReady'){

                // TODO: Melhorar isto

                const iframe = document.getElementById('hs-form-iframe-0');
                const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
                const el = innerDoc.querySelector('form');
                const input = el.getElementsByClassName("hs-button")[0];
                input.style.background = "#277a21";
                input.style.border = "none";
                el.getElementsByClassName("hubspot-link__container sproket")[0].remove();
                const requireds = el.getElementsByClassName("hs-form-required");
                Array.prototype.forEach.call(requireds, function(r) {
                    r.style.color = "#277a21";
                });


            }}
        // initiate the event handler
        window.addEventListener('message', handler);

        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
            window.removeEventListener('message', handler);
        };
    });

  return (
      <section className={styles.root}>
        <h3>Are you interested?</h3>
        <div id="my-hubspot-form" style={{margin:"auto"}}></div>
      </section>
  )
}

export default FormPage;