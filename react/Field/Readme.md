#### Field component is a combination of Label & Input components

Like `Input` component, it can have the following properties:

* `fullwidth` (default: `false`)

##### Example

```
<form>
  <Field
    id="idField"
    label="I'm a label"
    type="textarea"
    placeholder="I'm a textarea"
    onChange={() => {}}
    size="medium"
  />
</form>
```

#### Field when there's an error

```
<form>
  <Field 
    id="idFieldError" 
    label="I'm an error label" 
    placeholder="I'm an error input[type=text]" 
    error
    onChange={() => {}}
  />
</form>
```

##### Password field without show/hide button

```
<form>
  <Field
    id="idFieldPassword"
    label="I'm a password label"
    type="password"
    fieldProps={{showVisibilityButton: true}}
  />
</form>
```
