package nl.xservices.plugins.videocaptureplus;

import java.io.File;
import java.util.Comparator;

class FileNameComparator implements Comparator<File> {
  public int compare(File fileA, File fileB) {
    return fileA.getName().compareToIgnoreCase(fileB.getName());
  }
}