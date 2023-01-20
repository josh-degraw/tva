import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@pluralsight/icons'
import {
  getErrorMessageProps,
  getFieldMessageProps,
  getFormControlProps,
  getFormLabelProps,
  getSelectProps,
  getSelectOptionProps,
  getIconProps,
  getJSSelectProps,
} from '../../../src'
import selectOptions from '../data/options.data.json'

function Label(props) {
  const labelProps = getFormLabelProps({
    ...props.fieldOptions,
    htmlFor: props.htmlFor,
    value: props.children,
  })

  return <label {...labelProps}>{labelProps.value}</label>
}

function HelpMessage(props) {
  const { value, ...fieldMessage } = getFieldMessageProps({
    ...props.fieldOptions,
    id: props.id,
    message: props.helpText,
  })

  return <small {...fieldMessage}>{value}</small>
}

function ErrorMessage(props) {
  const errorMessageProps = getErrorMessageProps({
    ...props.fieldOptions,
    id: props.id,
    message: props.children,
  })

  return (
    <div {...errorMessageProps.container}>
      <small {...errorMessageProps.message}>
        {errorMessageProps.message.value}
      </small>
    </div>
  )
}

function SelectField(props) {
  const { onChange, ...options } = props
  const { fieldOptions } = getFormControlProps(options)
  const errorMessageId = 'select-errorMessage'
  const helpMessageId = 'select-helpMessage'
  const selectProps = getSelectProps({
    ...options,
    ...fieldOptions,
    describedBy: `${errorMessageId},${helpMessageId}`,
  })

  return (
    <div {...selectProps.fieldWrapper} style={{ marginBottom: '1rem' }}>
      <Label fieldOptions={fieldOptions} htmlFor={props.id}>
        {props.label}
      </Label>
      <div {...selectProps.selectWrapper}>
        <select {...selectProps.select} onChange={onChange} value={props.value}>
          <SelectOptions options={props.options} {...selectProps.option} />
        </select>
        <span {...selectProps.iconWrapper}>
          <ChevronDownIcon {...getIconProps(selectProps.iconOptions)} />
        </span>
      </div>
      {props.helpText && !fieldOptions.invalid && (
        <HelpMessage fieldOptions={fieldOptions} id={helpMessageId}>
          {props.helpText}
        </HelpMessage>
      )}
      {fieldOptions.invalid && (
        <ErrorMessage fieldOptions={fieldOptions} id={errorMessageId}>
          {props.errorMessage}
        </ErrorMessage>
      )}
    </div>
  )
}

function SelectOptions(props) {
  return props.options.map((option) => (
    <SelectOption key={option} label={option} value={option} />
  ))
}

function SelectOption(props) {
  const selectOptionProps = getSelectOptionProps({ value: props.value })

  return <option {...selectOptionProps}>{props.label}</option>
}

export default function Select({ logJS }) {
  const [characterClass, setCharacterClass] = useState('')

  function handleCharacterClassChange(e) {
    setCharacterClass(e.target.value)
  }

  useEffect(() => {
    if (logJS) {
      console.log(
        getJSSelectProps({
          id: 'test',
          name: 'test-name',
        })
      )
    }
  }, [logJS])

  return (
    <div id="select">
      <h3>Select</h3>
      <div className="App-container column">
        <SelectField
          id="characterClass-1"
          onChange={handleCharacterClassChange}
          name="characterClass-1"
          label="Choose your character class"
          required
          value={characterClass}
          options={selectOptions}
        />

        <SelectField
          disabled
          id="characterClass-2"
          onChange={handleCharacterClassChange}
          name="characterClass-2"
          label="Disabled Select"
          value={characterClass}
          options={selectOptions}
        />

        <SelectField
          errorMessage="A character class is required."
          id="characterClass-3"
          invalid
          onChange={handleCharacterClassChange}
          name="characterClass-3"
          label="Invalid Select"
          value={characterClass}
          options={selectOptions}
        />

        <SelectField
          id="characterClass-4"
          name="characterClass-4"
          onChange={handleCharacterClassChange}
          label="Medium Select"
          size="m"
          invalid
          value={characterClass}
          options={selectOptions}
        />
      </div>
    </div>
  )
}
