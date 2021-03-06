import { setOpenDrawer } from './drawer';
import storage from '../../helpers/storage';
jest.mock('../../helpers/storage');

describe('drawer resolvers', () => {
  test('setOpenDrawer() open', async () => {
    const setMock = jest.fn();
    const writeMock = jest.fn();
    storage.set.mockImplementation(setMock);
    expect(
      setOpenDrawer(
        null,
        { isOpen: true },
        { cache: { writeData: writeMock } },
      ),
    ).toBe(null);
    expect(writeMock).toBeCalledWith({ data: { isOpenDrawer: true } });
    expect(setMock).toBeCalledWith('isOpenDrawer', 'true');
  });
  test('setOpenDrawer() close', async () => {
    const setMock = jest.fn();
    const writeMock = jest.fn();
    storage.set.mockImplementation(setMock);
    expect(
      setOpenDrawer(
        null,
        { isOpen: false },
        { cache: { writeData: writeMock } },
      ),
    ).toBe(null);
    expect(writeMock).toBeCalledWith({ data: { isOpenDrawer: false } });
    expect(setMock).toBeCalledWith('isOpenDrawer', 'false');
  });
});
