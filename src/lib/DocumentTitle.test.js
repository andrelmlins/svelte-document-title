import { render } from "@testing-library/svelte";

import DocumentTitle from "./DocumentTitle.svelte";

describe("DocumentTitle Component", () => {
  test("shows proper heading when rendered", () => {
    const { container } = render(DocumentTitle, { title: "Test" });

    expect(container.firstChild).not.toBe(null);
  });
});
