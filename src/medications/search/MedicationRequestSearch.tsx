import { Row, Column } from '@hospitalrun/components'
import React, { ChangeEvent } from 'react'

import SelectWithLabelFormGroup, {
  Option,
} from '../../shared/components/input/SelectWithLabelFormGroup'
import TextInputWithLabelFormGroup from '../../shared/components/input/TextInputWithLabelFormGroup'
import useTranslator from '../../shared/hooks/useTranslator'
import MedicationSearchRequest from '../models/MedicationSearchRequest'
import { MedicationStatus } from '../models/MedicationStatus'

interface Props {
  searchRequest: MedicationSearchRequest
  onChange: (newSearchRequest: MedicationSearchRequest) => void
}

const MedicationRequestSearch = (props: Props) => {
  const { searchRequest, onChange } = props
  const { t } = useTranslator()
  const filterOptions: Option[] = [
    { label: t('medications.filter.all'), value: 'all' },
    { label: t('medications.status.draft'), value: 'draft' },
    { label: t('medications.status.active'), value: 'active' },
    { label: t('medications.status.onHold'), value: 'on hold' },
    { label: t('medications.status.completed'), value: 'completed' },
    { label: t('medications.status.enteredInError'), value: 'entered in error' },
    { label: t('medications.status.canceled'), value: 'canceled' },
    { label: t('medications.status.unknown'), value: 'unknown' },
  ]

  const onSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    onChange({
      ...searchRequest,
      text: query,
    })
  }

  const onFilterChange = (filter: MedicationStatus) => {
    onChange({
      ...searchRequest,
      status: filter,
    })
  }

  return (
    <Row>
      <Column md={3} lg={2}>
        <SelectWithLabelFormGroup
          name="filterStatus"
          label={t('medications.filterTitle')}
          options={filterOptions}
          defaultSelected={filterOptions.filter(({ value }) => value === searchRequest.status)}
          onChange={(values) => onFilterChange(values[0] as MedicationStatus)}
          isEditable
        />
      </Column>
      <Column>
        <TextInputWithLabelFormGroup
          name="searchbox"
          label={t('medications.search')}
          placeholder={t('medications.search')}
          value={searchRequest.text}
          isEditable
          onChange={onSearchQueryChange}
        />
      </Column>
    </Row>
  )
}

export default MedicationRequestSearch
