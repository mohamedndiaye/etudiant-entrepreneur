import React, {PropTypes} from 'react'
import { FormGroup, ControlLabel, FormControl, Radio, HelpBlock } from 'react-bootstrap'
import RadioGroup from '../../common/RadioGroup'
import ValidatedFormControl from '../../common/ValidatedFormControl'
import {regions, pepites, establishments} from './pepiteEstablishmentMap'

function getPepiteFromEstablishment(establishmentId) {
  return pepites[establishments[establishmentId].pepite]
}

function getAllValidPepites(regionId, establishmentId) {
  if (establishmentId >= 0) {
    return ([getPepiteFromEstablishment(establishmentId)])
  }
  if (regionId >= 0) {
    return (regions[regionId].establishments.map(getPepiteFromEstablishment))
  }
  return []
}

const ContactForm = ({pepite, errors, onChange}) => {
  return (
    <form>
      <p>Mon PEPITE</p>
      <FormGroup className="required">
        <ControlLabel>Ma région</ControlLabel>
        <ValidatedFormControl name="region" componentClass="select" onChange={onChange} value={pepite.region} error={errors.region}>
          <option value="0" disabled>Sélectionner</option>
          {regions.map((region, index) => { return (<option key={index + 1} value={index + 1}>{region.name}</option>) }) }
        </ValidatedFormControl>
      </FormGroup>
      {(() => {
        if (pepite.region != 0) {
          return(
            <FormGroup className="required">
              <ControlLabel>Mon établissement pour l'année 2016</ControlLabel>
              <ValidatedFormControl name="establishment" componentClass="select" onChange={onChange} value={pepite.establishment} error={errors.region}>
                <option value="0" disabled>Sélectionner</option>
                {regions[pepite.region - 1].establishments.map((eid) => { return (<option key={eid + 1} value={eid + 1}>{establishments[eid].name}</option>) }) }
              </ValidatedFormControl>
            </FormGroup>
          )
        }})()}
      {(() => {
        if (pepite.region != 0) {
          return(
            <FormGroup className="required">
              <ControlLabel>Mon PEPITE</ControlLabel>
              <ValidatedFormControl name="establishment" componentClass="select" onChange={onChange} value={pepite.establishment} error={errors.region}>
                <option value="0" disabled>Sélectionner</option>
                {getAllValidPepites(pepite.region - 1, pepite.establishment - 1).map((pepite, index) => { return (<option key={index + 1} value={index + 1}>PEPITE {pepite}</option>) }) }
              </ValidatedFormControl>
            </FormGroup>
            )
        }})()}
    </form>
  )
}

ContactForm.propTypes = {
  pepite: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
}

export default ContactForm
