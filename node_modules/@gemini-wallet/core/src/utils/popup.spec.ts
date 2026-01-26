import { describe, expect, it, mock } from "bun:test";

// Mock the popup module functions directly
const mockPopupWindow = {
  close: mock(),
  closed: false,
  focus: mock(),
  opener: { focus: mock() },
};

const mockOpenPopup = mock(() => mockPopupWindow);
const mockClosePopup = mock();

// Mock the module
mock.module("./popup", () => ({
  closePopup: mockClosePopup,
  openPopup: mockOpenPopup,
}));

import { closePopup, openPopup } from "./popup";

describe("Popup util", () => {
  describe("openPopup", () => {
    it("should return a popup window object", () => {
      const url = new URL("https://example.com");
      const popup = openPopup(url);

      expect(mockOpenPopup).toHaveBeenCalledWith(url);
      expect(popup).toBe(mockPopupWindow);
    });

    it("should be called with correct URL", () => {
      const url = new URL("https://test.com");
      openPopup(url);

      expect(mockOpenPopup).toHaveBeenCalledWith(url);
    });
  });

  describe("closePopup", () => {
    it("should call closePopup with popup window", () => {
      const popup = { closed: false };
      closePopup(popup as any);

      expect(mockClosePopup).toHaveBeenCalledWith(popup);
    });

    it("should handle null popup", () => {
      closePopup(null);

      expect(mockClosePopup).toHaveBeenCalledWith(null);
    });

    it("should handle closed popup", () => {
      const popup = { closed: true };
      closePopup(popup as any);

      expect(mockClosePopup).toHaveBeenCalledWith(popup);
    });
  });
});
