import { inventory } from 'constants/inventory';
import AccordionItem from './accordion-item';

const Measure = () => {
  return (
    <>
      {inventory.map((item, index) => (
        <AccordionItem key={item.name} item={item} />
      ))}
    </>
  );
};

Measure.propTypes = {};

export default Measure;
