# O(nlogn) time | O(1) space
def classPhotos (redShirtHeights, blueShirtHeights):
    redShirtHeights.sort(reverse=True)
    blueShirtHeights.sort(reverse=True)

    shirtColorInFrontRow = "RED" if redShirtHeights[0] < blueShirtHeights[0] else "BLUE"
    for idx in range(len(redShirtHeights)):
        redShirtHeights = redShirtHeights[idx]
        blueShirtHeights = blueShirtHeights[idx]

        if shirtColorInFrontRow == "RED":
            if redShirtHeights >= blueShirtHeights:
                return False
        else:
            if blueShirtHeights >= redShirtHeights:
                return False
    return True