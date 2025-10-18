import qrcode

# URL users will scan (change later to your public domain if deployed)
url = "https://an5onc.github.io/kbuiltco/"

qr = qrcode.QRCode(box_size=10, border=4)
qr.add_data(url)
qr.make(fit=True)
img = qr.make_image(fill_color="black", back_color="white")
img.save("raffle_qr.png")
print("QR code saved as raffle_qr.png")