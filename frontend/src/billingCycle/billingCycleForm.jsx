import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./billingCycleAction";
import { reduxForm, Field, formValueSelector } from "redux-form";
import LabelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Nome"
            cols="12 4"
            placeholder="Informe o nome"
          />
          <Field
            name="month"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Mês"
            cols="12 4"
            placeholder="Informe o mês"
            type="number"
          />
          <Field
            name="year"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Ano"
            cols="12 4"
            placeholder="Informe o ano"
            type="number"
          />
          <ItemList
            cols="12 6"
            list={credits}
            field="credits"
            legend="Créditos"
            readOnly={readOnly}
          />
          <ItemList
            cols="12 6"
            list={debts}
            field="debts"
            legend="Débitos"
            showStatus={true}
            readOnly={readOnly}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

BillingCycleForm = reduxForm({
  form: "BillingCycleForm",
  destroyOnUnmount: false
})(BillingCycleForm);
const selector = formValueSelector("BillingCycleForm");
const mapStateToProps = state => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts")
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCycleForm);
