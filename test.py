import pyperclip as pc
# import win32clipboard

with open("test.txt", encoding="utf8") as f:
    lines = f.readlines()

lines_converted = []

for element in lines:
    lines_converted.append(element.strip())

lines_str = ' '.join([str(item) for item in lines_converted])

pc.copy(lines_str)

# win32clipboard.OpenClipboard()
# win32clipboard.EmptyClipboard()
# win32clipboard.SetClipboardText(lines_str)
# win32clipboard.CloseClipboard()

print(lines_str)
