import * as Constants from "../../actions/doctorDashboardAction";

describe("Doctor Dashboard Reducer and Actions", () => {
  it("tests the setAllAppointmentsScrollIndex action", () => {
    const payload = 10;
    const expectedAction = {
      type: Constants.SET_ALL_APPOINTMENTS_SCROLL_INDEX,
      payload,
    };
    expect(Constants.setAllAppointmentsScrollIndex(payload)).toEqual(
      expectedAction
    );
  });
});
