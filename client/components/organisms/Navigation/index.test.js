import { render } from "@testing-library/react";

import { useSelector } from "react-redux";

import Navigation from ".";

jest.mock("react-redux");

describe("Navigation", () => {
  it("render Sign-in and Sign-up", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        userReducer: {
          user: null,
        },
      })
    );

    const { container, queryByText } = render(<Navigation />);

    expect(container).toHaveTextContent(/로그인/);
    expect(container).toHaveTextContent(/회원 가입/);

    expect(queryByText(/내 정보/)).toBeNull();
    expect(queryByText(/로그아웃/)).toBeNull();
  });

  it("doesn't render Sign-in and Sign-up", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        userReducer: {
          user: {
            id: 1,
            nickname: "James",
            profileImage:
              "http://k.kakaocdn.net/dn/boEp6l/btq6MTNzPgH/mVE7m02pyxfoMLZIb0iJQK/img_640x640.jpg",
          },
        },
      })
    );

    const { container, queryByText } = render(<Navigation />);

    expect(container).toHaveTextContent(/내 정보/);
    expect(container).toHaveTextContent(/로그아웃/);

    expect(queryByText(/로그인/)).toBeNull();
    expect(queryByText(/회원가입/)).toBeNull();
  });
});
