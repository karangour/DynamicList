import React from 'react';
import { Input, Button, DropdownSingle, Checkbox, RadioButton, DatePicker } from 'oolib';

const componentMap = { // The comp names in JSON aren't matching with the oolib comps, so wanted to figure out what the right names would be. Couldn't get to debugging stage.
    TextInput: Input,
    DropdownSingle: DropdownSingle,
    CheckboxList: Checkbox,
    RadioList: RadioButton,
    DatePicker: DatePicker
};

const FormComponent = ({ formConfig }) => {
    
    const renderFormElement = (element) => {
        const OolibComponent = componentMap[element.comp];
        if (!Component) return null;

        const componentProps = {
            ...element.props,
            required: element.isRequired
        };

        return (
            <OolibComponent
                key={element.props.id}
                {...componentProps}
            />
        );
    };

    return (
        <form>
            {formConfig.map((element) => renderFormElement(element))}
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default FormComponent;
