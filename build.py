import shutil
import os
from subprocess import call


# Get all the paths we care about
cwd = os.getcwd()
jsdir = os.path.join(cwd, "js")
cssdir = os.path.join(cwd, "css")
output = os.path.join(cwd, "output")
outjsdir = os.path.join(output, "js")
outcssdir = os.path.join(output, "css")

nodebin = os.path.join(cwd, "node_modules", ".bin")
lessbin = os.path.join(nodebin, "lessc.cmd")
jsminbin = os.path.join(nodebin, "jsmin.cmd")
npmbin = "npm.cmd"

# CLean the old stuff.
if os.path.exists(output):
    print "cleaning old output"
    shutil.rmtree(output)

# Build the output
print "building output"
os.mkdir(output)
os.mkdir(outjsdir)
os.mkdir(outcssdir)

# If we don't have the npm modules installed yet then install them.
if os.path.exists(lessbin) is False or os.path.exists(jsminbin) is False:
    print "Updating node packages"
    call([npmbin, "update"])

# Copy the files over.
files = os.listdir(cwd)
for file in files:
    filename = os.path.join(cwd, file)
    if os.path.isfile(filename) and filename.endswith(".html"):
        print "copying file: ", file
        shutil.copy(filename, output)

files = os.listdir(jsdir)
for file in files:
    filename = os.path.join(jsdir, file)
    if os.path.isfile(filename) and filename.endswith(".js"):
        if filename.endswith(".min.js"):
            print "copying file: ", file
            shutil.copy(filename, outjsdir)
        else:
            print "minimizing file: ", file
            outfile = os.path.join(outjsdir, file)
            call([jsminbin, "-o", outfile, filename])

files = os.listdir(cssdir)
for file in files:
    filename = os.path.join(cssdir, file)
    if os.path.isfile(filename) and filename.endswith(".less"):
        print "compiling file: ", file
        outfile = file.replace(".less", ".css")
        outfile = os.path.join(outcssdir, outfile)
        call([lessbin, "-x", filename, outfile])
