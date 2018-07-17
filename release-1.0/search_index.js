var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Makie.jl-Documentation-1",
    "page": "Home",
    "title": "Makie.jl Documentation",
    "category": "section",
    "text": "Makie is a high level plotting interface for GLVisualize, with a focus on interactivity and speed.It can also be seen as a prototype for a new design of Plots.jl, since it will implement a very similar interface and incorporate a lot of the ideas.A fresh start instead of the already available GLVisualize backend for Plots.jl was needed for the following reasons:Plots.jl was written to create static plots without any interaction. This is deeply reflected in the internal design and makes it hard to integrate the high performance interaction possibilities from GLVisualize.\nPlots.jl has many high level plotting packages as a backend which lead to a very inconsistent design for the backends. For example, there is no straight interface a backend needs to implement. The backend abstraction happens at a very high level and the Plots.jl design relies on the high-level backends to fill in a lot of functionality - which lead to a lot of duplicated work for the lower level backends and a lot of inconsistent behavior since the code isn\'t shared between backends. It also means that it is a lot of work to maintain a backend.\nThe attributes a plot/series contains and where the default creation happens is opaque and not well documented. Sometimes it\'s the task of the backend to create defaults for missing attributes, sometimes Plots.jl creates the defaults. A missing attribute is signalled in too many different ways (e.g. false, nothing, \"\") which then needs to be checked and filled in by the backend. This leads to making it very challenging to e.g. find the color of a line for different plot types and creates buggy, inconsistent and messy backend code.\nAs mentioned in point 2, there is not a single consistent low level drawing API. This also influences recipes, since there is not a straight mapping to a low level drawing API and therefore it\'s not that easy to compose. There should be a finite set of \"atomic\" drawing operations (which can\'t be decomposed further) which a backend needs to implement and the rest should be implemented via recipes using those atomic operations. So once a backend implements those, it will support all of the plotting operations and only minor maintenance work needs to be done from that point on.\nBackend loading is done in Plots.jl via evaling the backend code. This has at 4 negative consequences:\nBackend code can\'t be precompiled leading to longer load times\nBackend dependencies are not in the Plots.jl REQUIRE file\nBackend dependencies get loaded via a function that gets evaled, so it\'s a bit awkward to use those dependencies in the function inside a backend\nWorld age issues because of the evalPlease read the chapters Scene, Functions, Interaction, Extending, Backends and Devdocs to see how Makie solves those issues!The code that will be moved back to Plots.jl lives in plotsbase."
},

{
    "location": "help_functions.html#",
    "page": "Help functions",
    "title": "Help functions",
    "category": "page",
    "text": ""
},

{
    "location": "help_functions.html#Help-functions-1",
    "page": "Help functions",
    "title": "Help functions",
    "category": "section",
    "text": ""
},

{
    "location": "help_functions.html#AbstractPlotting.help",
    "page": "Help functions",
    "title": "AbstractPlotting.help",
    "category": "function",
    "text": "help(func)\n\nWelcome to the main help function of Makie.jl / AbstractArray.jl.\n\nFor help on a specific function\'s arguments, type help_arguments(function_name).\n\nFor help on a specific function\'s attributes, type help_attributes(plot_Type).\n\n\n\n"
},

{
    "location": "help_functions.html#help-1",
    "page": "Help functions",
    "title": "help",
    "category": "section",
    "text": "helpExample usage:using Makie # hide\nhelp(scatter; extended = true)"
},

{
    "location": "help_functions.html#AbstractPlotting.help_arguments",
    "page": "Help functions",
    "title": "AbstractPlotting.help_arguments",
    "category": "function",
    "text": "help_arguments(io, func)\n\nReturns a list of signatures for function func.\n\n\n\n"
},

{
    "location": "help_functions.html#help_arguments-1",
    "page": "Help functions",
    "title": "help_arguments",
    "category": "section",
    "text": "help_argumentsExample usage:using Makie # hide\nhelp_arguments(STDOUT, scatter)"
},

{
    "location": "help_functions.html#AbstractPlotting.help_attributes",
    "page": "Help functions",
    "title": "AbstractPlotting.help_attributes",
    "category": "function",
    "text": "help_attributes(io, Typ; extended = false)\n\nReturns a list of attributes for the plot type Typ. The attributes returned extend those attributes found in the default_theme.\n\nUse the optional keyword argument extended (default = false) to show in addition the default values of each attribute.\n\n\n\n"
},

{
    "location": "help_functions.html#help_attributes-1",
    "page": "Help functions",
    "title": "help_attributes",
    "category": "section",
    "text": "help_attributesExample usage:using Makie # hide\nhelp_attributes(STDOUT, Scatter; extended = true)"
},

{
    "location": "functions-overview.html#",
    "page": "Atomic functions overview",
    "title": "Atomic functions overview",
    "category": "page",
    "text": ""
},

{
    "location": "functions-overview.html#Atomic-functions-overview-1",
    "page": "Atomic functions overview",
    "title": "Atomic functions overview",
    "category": "section",
    "text": "The follow document lists the atomic plotting functions and their usage. These are the most atomic primitives which one can stack together to form more complex plots.For general help about each function, consult the Help functions.See Plot function signatures for the available plot function signatures.See Plot attributes for the available plot attributes.For a general overview of styling and to see the default parameters, refer to the chapter Themes."
},

{
    "location": "functions-overview.html#heatmap-1",
    "page": "Atomic functions overview",
    "title": "heatmap",
    "category": "section",
    "text": "heatmap(Image: library lines 70:75) (Image: library lines 119:119) (Image: library lines 582:593) (Image: library lines 666:667) (Image: library lines 727:738)"
},

{
    "location": "functions-overview.html#AbstractPlotting.image",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.image",
    "category": "function",
    "text": "`image(x, y, image)` / `image(image)`\n\nPlots an image on range x, y (defaults to dimensions).\n\n\n\n"
},

{
    "location": "functions-overview.html#image-1",
    "page": "Atomic functions overview",
    "title": "image",
    "category": "section",
    "text": "image(Image: library lines 7:7) (Image: library lines 85:89) (Image: library lines 282:282) (Image: library lines 507:514) (Image: library lines 634:642) (Image: library lines 666:667)"
},

{
    "location": "functions-overview.html#lines-1",
    "page": "Atomic functions overview",
    "title": "lines",
    "category": "section",
    "text": "lines(Image: library lines 274:279) (Image: library lines 364:405) (Image: library lines 411:444) (Image: library lines 520:523) (Image: library lines 670:705)"
},

{
    "location": "functions-overview.html#AbstractPlotting.linesegments",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.linesegments",
    "category": "function",
    "text": "`linesegments(x, y, z)` / `linesegments(x, y)` / `linesegments(positions)`\n\nPlots a line for each pair of points in (x, y, z), (x, y), or positions.\n\nAttributes: The same as for lines\n\n\n\n"
},

{
    "location": "functions-overview.html#linesegments-1",
    "page": "Atomic functions overview",
    "title": "linesegments",
    "category": "section",
    "text": "linesegments(Image: library lines 93:101) (Image: library lines 364:405)"
},

{
    "location": "functions-overview.html#mesh-1",
    "page": "Atomic functions overview",
    "title": "mesh",
    "category": "section",
    "text": "mesh(Image: library lines 38:61) (Image: library lines 64:64) (Image: library lines 164:170) (Image: library lines 218:267) (Image: library lines 319:324) (Image: library lines 328:328) (Image: library lines 351:360) (Image: library lines 455:458) (Image: library lines 461:461) (Image: library lines 464:473) (Image: library lines 476:476)"
},

{
    "location": "functions-overview.html#meshscatter-1",
    "page": "Atomic functions overview",
    "title": "meshscatter",
    "category": "section",
    "text": "meshscatter(Image: library lines 218:267) (Image: library lines 292:294) (Image: library lines 527:532) (Image: library lines 561:576)"
},

{
    "location": "functions-overview.html#scatter-1",
    "page": "Atomic functions overview",
    "title": "scatter",
    "category": "section",
    "text": "scatter(Image: library lines 10:10) (Image: library lines 85:89) (Image: library lines 123:129) (Image: library lines 274:279) (Image: library lines 282:282) (Image: library lines 332:342) (Image: library lines 346:347) (Image: library lines 536:536) (Image: library lines 540:540) (Image: library lines 544:556) (Image: library lines 670:705) (Image: library lines 712:712) (Image: library lines 720:724) (Image: library lines 727:738) (Image: library lines 741:771)"
},

{
    "location": "functions-overview.html#surface-1",
    "page": "Atomic functions overview",
    "title": "surface",
    "category": "section",
    "text": "surface(Image: library lines 178:214) (Image: library lines 298:314) (Image: library lines 482:490) (Image: library lines 493:501) (Image: library lines 507:514) (Image: library lines 634:642) (Image: library lines 645:660) (Image: library lines 741:771)"
},

{
    "location": "functions-overview.html#AbstractPlotting.text",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.text",
    "category": "function",
    "text": "`text(string)`\n\nPlots a text.\n\n\n\n"
},

{
    "location": "functions-overview.html#text-1",
    "page": "Atomic functions overview",
    "title": "text",
    "category": "section",
    "text": "text(Image: library lines 134:134) (Image: library lines 144:158)"
},

{
    "location": "functions-overview.html#volume-1",
    "page": "Atomic functions overview",
    "title": "volume",
    "category": "section",
    "text": "volume(Image: library lines 452:452) (Image: library lines 582:593)"
},

{
    "location": "functions-overview.html#contour-1",
    "page": "Atomic functions overview",
    "title": "contour",
    "category": "section",
    "text": "contour(Image: library lines 107:109) (Image: library lines 114:115) (Image: library lines 582:593)"
},

{
    "location": "signatures.html#",
    "page": "Plot function signatures",
    "title": "Plot function signatures",
    "category": "page",
    "text": ""
},

{
    "location": "signatures.html#Plot-function-signatures-1",
    "page": "Plot function signatures",
    "title": "Plot function signatures",
    "category": "section",
    "text": ""
},

{
    "location": "signatures.html#General-function-signatures-and-usage-1",
    "page": "Plot function signatures",
    "title": "General function signatures and usage",
    "category": "section",
    "text": ""
},

{
    "location": "signatures.html#Create-a-new-plot-inside-a-new-scene-object-1",
    "page": "Plot function signatures",
    "title": "Create a new plot inside a new scene object",
    "category": "section",
    "text": "func(args...; kw_args...)where func are the atomics function, e.g. lines, scatter, surface, etc. For a list of the available atomics functions, see Atomic functions overview."
},

{
    "location": "signatures.html#Create-a-new-plot-as-a-subscene-of-the-specified-scene-object-1",
    "page": "Plot function signatures",
    "title": "Create a new plot as a subscene of the specified scene object",
    "category": "section",
    "text": "func(scene::SceneLike, args...; kw_args...)"
},

{
    "location": "signatures.html#Add-a-plot-in-place-to-the-current_scene()-1",
    "page": "Plot function signatures",
    "title": "Add a plot in-place to the current_scene()",
    "category": "section",
    "text": "func!(args...; kw_args...)"
},

{
    "location": "signatures.html#Add-a-plot-in-place-to-the-specified-scene-as-a-subscene-1",
    "page": "Plot function signatures",
    "title": "Add a plot in-place to the specified scene as a subscene",
    "category": "section",
    "text": "func!(scene::SceneLike, args...; kw_args...)See Plot attributes for the available plot attributes."
},

{
    "location": "attributes.html#",
    "page": "Plot attributes",
    "title": "Plot attributes",
    "category": "page",
    "text": ""
},

{
    "location": "attributes.html#Plot-attributes-1",
    "page": "Plot attributes",
    "title": "Plot attributes",
    "category": "section",
    "text": "Below is the list of all of the available plot attributes for Makie. You can also get this by doingkeys(default_theme(nothing, Typ))where Typ is the plot type.See Plot function signatures for the available plot function signatures.Symbol Description\nabsorption Float32. Sets the absorption value for volume plots.\nalgorithm Algorithm to be used for volume plots. Can be one of :iso, :absorption, :mip, :absorptionrgba, or :indexedabsorption.\nalign (:pos, :pos). Specify the text alignment, where :pos can be :left, :center, or :right.\nalpha Float in [0,1]. The alpha value (transparency).\ncolor The color of the main plot element (markers, lines, etc.). Can be a color symbol/string like :red, or a Colorant\ncolormap The color map of the main plot. Call available_gradients() to see what gradients are available. Can also be used with any Vector{<: Colorant}, or e.g. [:red, :black]\ncolorrange A tuple (min, max) where min and max specify the data range to be used for indexing the colormap. E.g. color = [-2, 4] with colorrange = (-2, 4) will map to the lowest and highest color value of the colormap\nfillrange Bool. Toggles range filling in contour plots.\nfont String or Symbol. Specifies the font and can name any font available on the system\nglowcolor Color Type. Color of the marker glow (outside the border) in scatter plots.\nglowwidth Number. Width of the marker glow in scatter plots.\nimage The image to be plotted on the plot.\ninterpolate Bool. For heatmap and images. Toggles color interpolation between nearby pixels.\nisorange Float32. Sets the isorange for volume plots.\nisovalue Float32. Sets the isovalue for volume plots.\nlevels Integer. Number of levels for a contour-type plot.\nlinestyle Symbol. Style of the line (for line and linesegments plots). Available styles are :dash, :dot, :dashdot, and :dashdotdot. You can also supply an array describing the length of each gap/fill.\nlinewidth Number. Width of the line in line and linesegments plots.\nmarker Symbol, Shape, or AbstractVector.\nmarker_offset Array of GeometryTypes.Point\'s. Specifies the offset coordinates for the markers. See the \"Marker offset\" example.\nmarkersize Number or AbstractVector. Specifies size (radius pixels) of the markers.\nposition NTuple{2,Float}, (x, y). Specify the coordinates to position text at.\nrotation Number. Specifies the rotation in degrees.\nrotations AbstractVector. Similar to :rotation, except it specifies the rotation for each element in the plot.\nshading Bool. Specifies if shading should be on or not (for meshes).\nstrokecolor Color Type. Color of the marker stroke (border).\nstrokewidth Number. Width of the marker stroke (in pixels).\ntextsize Integer. Font pointsize for text.\ntransformation (:plane, location). Transforms the :plane to the specified location. Possible :plane\'s are :xy, :yz, and :xz.\nvisible Bool. Toggle visibility of plot."
},

{
    "location": "interaction.html#",
    "page": "Interaction",
    "title": "Interaction",
    "category": "page",
    "text": ""
},

{
    "location": "interaction.html#Interaction-1",
    "page": "Interaction",
    "title": "Interaction",
    "category": "section",
    "text": "Makie offers a sophisticated referencing system to share attributes across the Scene in your plot. This is great for animations and saving resources – also if the backend decides to put data on the GPU you might even share those in GPU memory."
},

{
    "location": "interaction.html#Using-Mouse-and-Time-to-animate-plots-1",
    "page": "Interaction",
    "title": "Using Mouse and Time to animate plots",
    "category": "section",
    "text": ""
},

{
    "location": "interaction.html#Interaction-using-time-1",
    "page": "Interaction",
    "title": "Interaction using time",
    "category": "section",
    "text": "To animate a scene, you need to create a Node, e.g.:time = Node(0.0)and then use lift on the node to access the values live. Then, any plot that is based on the lift will be updated every time the input node updates!@example_database(\"Interaction\")"
},

{
    "location": "interaction.html#Interaction-using-the-mouse-1",
    "page": "Interaction",
    "title": "Interaction using the mouse",
    "category": "section",
    "text": "To interact with a scene using the mouse cursor, simply lift the cursor, e.g.:pos = lift(scene.events.mouseposition, time)@example_database(\"Interaction with Mouse\")For more info, consult the Examples gallery."
},

{
    "location": "interaction.html#Animating-and-sharing-on-the-GPU-1",
    "page": "Interaction",
    "title": "Animating and sharing on the GPU",
    "category": "section",
    "text": "using Makie\n\nscene = Scene(resolution = (500, 500))\n@ref A = rand(32, 32) # if uploaded to the GPU, it will be shared on the GPU\n\nsurface(@ref A) # refer to exactly the same a in wireframe and surface plot\nwireframe((@ref A) .+ 0.5) # offsets A on the GPU based on the same data\n\nfor i = 1:10\n    # updates A - resulting in an animation of the surface and offsetted wireframe plot\n    @ref A[:, :] = rand(32, 32)\nend"
},

{
    "location": "interaction.html#Simple-GUI-1",
    "page": "Interaction",
    "title": "Simple GUI",
    "category": "section",
    "text": "using Makie\n\nscene = Scene()\n@ref slicer1 = slider(linspace(0, 1, 100)) # create a slider\n\n# generate some pretty data\nfunction xy_data(x,y,i)\n    x = (x - 0.5f0) * i\n    y = (y - 0.5f0) * i\n    r = sqrt(x * x + y * y)\n    Float32(sin(r) / r)\nend\n\nsurf(i, N) = Float32[xy_data(x, y, i, N) for x = linspace(0, 1, N), y = linspace(0, 1, N)]\n\nsurface(surf.(@ref slicer1, 512)) # refer to exactly the same a in wireframe and surface plot\n"
},

{
    "location": "output.html#",
    "page": "Output",
    "title": "Output",
    "category": "page",
    "text": ""
},

{
    "location": "output.html#Output-1",
    "page": "Output",
    "title": "Output",
    "category": "section",
    "text": "Makie overloads the FileIO interface, so it is simple to save plots as images or videos."
},

{
    "location": "output.html#Static-plots-1",
    "page": "Output",
    "title": "Static plots",
    "category": "section",
    "text": "To save a scene as an image, you can just write e.g.:Makie.save(\"plot.png\", scene)\nMakie.save(\"plot.jpg\", scene)where scene is the scene handle.In the backend, ImageMagick is used for the image format conversions."
},

{
    "location": "output.html#Makie.record",
    "page": "Output",
    "title": "Makie.record",
    "category": "function",
    "text": "record(func, scene, path)\n\nusage:\n\n    record(scene, \"test.gif\") do io\n        for i = 1:100\n            scene.plots[:color] = ...# animate scene\n            recordframe!(io) # record a new frame\n        end\n    end\n\n\n\nrecord(func, scene, path, iter)\n\nusage:\n\n    record(scene, \"test.gif\", 1:100) do i\n        scene.plots[:color] = ...# animate scene\n    end\n\n\n\n"
},

{
    "location": "output.html#Animated-plots-1",
    "page": "Output",
    "title": "Animated plots",
    "category": "section",
    "text": "It is also possible to output animated plots as videos (note that this requires ffmpeg to be installed and properly configured on your computer (test this by running ffmpeg -version from a terminal window).)recordFor recording of videos (either as .mp4 or .gif), you can do:record(scene, \"video.mp4\", itr) do i\n    func(i) # or some other animation in scene\nendwhere itr is an iterator and scene is the scene handle.It is also possible to record to gifs:record(scene, \"video.gif\", itr) do i\n    func(i) # or some other animation in scene\nendIn both cases, the returned value is a path pointing to the location of the recorded file."
},

{
    "location": "output.html#Example-usage-1",
    "page": "Output",
    "title": "Example usage",
    "category": "section",
    "text": "@example_database(\"Record Video\")For more info, consult the Examples gallery."
},

{
    "location": "examples-heatmap.html#",
    "page": "heatmap",
    "title": "heatmap",
    "category": "page",
    "text": ""
},

{
    "location": "examples-heatmap.html#heatmap-1",
    "page": "heatmap",
    "title": "heatmap",
    "category": "section",
    "text": ""
},

{
    "location": "examples-heatmap.html#\"heatmap-interpolation\"-1",
    "page": "heatmap",
    "title": "\"heatmap interpolation\"",
    "category": "section",
    "text": "Tags: 2d, heatmap, interpolate.using Makie\n\np1 = heatmap(rand(100, 100), interpolate = true)\np2 = heatmap(rand(100, 100), interpolate = false)\nscene = AbstractPlotting.vbox(p1, p2)\ntext!(campixel(p1), \"Interpolate = true\", position = widths(p1) .* Vec(0.5, 1), align = (:center, :top), raw = true)\ntext!(campixel(p2), \"Interpolate = false\", position = widths(p2) .* Vec(0.5, 1), align = (:center, :top), raw = true)\nscene\n\n"
},

{
    "location": "examples-heatmap.html#\"Heatmap\"-1",
    "page": "heatmap",
    "title": "\"Heatmap\"",
    "category": "section",
    "text": "Tags: 2d, heatmap.using Makie\n\nheatmap(rand(32, 32))\n\n"
},

{
    "location": "examples-heatmap.html#\"3D-Contour-with-2D-contour-slices\"-1",
    "page": "heatmap",
    "title": "\"3D Contour with 2D contour slices\"",
    "category": "section",
    "text": "Tags: 3d, contour, documentation, heatmap, transformation, volume.using Makie\n\nfunction test(x, y, z)\n    xy = [x, y, z]\n    ((xy\') * eye(3, 3) * xy) / 20\nend\nx = linspace(-2pi, 2pi, 100)\nscene = Scene()\nc = contour!(scene, x, x, x, test, levels = 10)[end]\nxm, ym, zm = minimum(scene.limits[])\n# c[4] == fourth argument of the above plotting command\ncontour!(scene, x, x, map(v-> v[1, :, :], c[4]), transformation = (:xy, zm))\nheatmap!(scene, x, x, map(v-> v[:, 1, :], c[4]), transformation = (:xz, ym))\ncontour!(scene, x, x, map(v-> v[:, :, 1], c[4]), fillrange = true, transformation = (:yz, xm))\n\n"
},

{
    "location": "examples-heatmap.html#\"Test-heatmap-image-overlap\"-1",
    "page": "heatmap",
    "title": "\"Test heatmap + image overlap\"",
    "category": "section",
    "text": "Tags: 2d, documentation, heatmap, image, transparency.using Makie\n\nheatmap(rand(32, 32))\nimage!(map(x->RGBAf0(x,0.5, 0.5, 0.8), rand(32,32)))\n\n"
},

{
    "location": "examples-heatmap.html#\"Mouse-Picking\"-1",
    "page": "heatmap",
    "title": "\"Mouse Picking\"",
    "category": "section",
    "text": "Tags: documentation, heatmap, interactive, scatter.using Makie\n\nimg = rand(100, 100)\nscene = Scene()\nheatmap!(scene, img, scale_plot = false)\nclicks = Node(Point2f0[(0,0)])\nforeach(scene.events.mousebuttons) do buttons\n   if ispressed(scene, Mouse.left)\n       pos = to_world(scene, Point2f0(scene.events.mouseposition[]))\n       push!(clicks, push!(clicks[], pos))\n   end\n   return\nend\nscatter!(scene, clicks, color = :red, marker = \'+\', markersize = 10, raw = true)\n\n"
},

{
    "location": "examples-image.html#",
    "page": "image",
    "title": "image",
    "category": "page",
    "text": ""
},

{
    "location": "examples-image.html#image-1",
    "page": "image",
    "title": "image",
    "category": "section",
    "text": ""
},

{
    "location": "examples-image.html#\"image\"-1",
    "page": "image",
    "title": "\"image\"",
    "category": "section",
    "text": "Tags: 2d, image.using Makie\n\nimage(Makie.logo(), scale_plot = false)\n\n"
},

{
    "location": "examples-image.html#\"Subscenes\"-1",
    "page": "image",
    "title": "\"Subscenes\"",
    "category": "section",
    "text": "Tags: 2d, image, scatter, subscene.using Makie\n\nimg = rand(RGBAf0, 100, 100)\nscene = image(img, show_axis = false)\nsubscene = Scene(scene, IRect(100, 100, 300, 300))\nscatter!(subscene, rand(100) * 200, rand(100) * 200, markersize = 4)\nscene\n\n"
},

{
    "location": "examples-image.html#\"image-scatter\"-1",
    "page": "image",
    "title": "\"image scatter\"",
    "category": "section",
    "text": "Tags: 3d, image, scatter.using Makie\n\nscatter(\n    1:10, 1:10, rand(10, 10) .* 10,\n    rotations = normalize.(rand(Quaternionf0, 10*10)),\n    markersize = 1,\n    # can also be an array of images for each point\n    # need to be the same size for best performance, though\n    marker = Makie.logo()\n)\n\n"
},

{
    "location": "examples-image.html#\"Surface-with-image\"-1",
    "page": "image",
    "title": "\"Surface with image\"",
    "category": "section",
    "text": "Tags: 3d, documentation, image, surface.using Makie\n\nN = 30\nfunction xy_data(x, y)\n    r = sqrt(x^2 + y^2)\n    r == 0.0 ? 1f0 : (sin(r)/r)\nend\nr = linspace(-2, 2, N)\nsurf_func(i) = [Float32(xy_data(x*i, y*i)) for x = r, y = r]\nsurface(\n    r, r, surf_func(10),\n    image = rand(RGBAf0, 124, 124)\n)\n\n"
},

{
    "location": "examples-image.html#\"Image-on-Surface-Sphere\"-1",
    "page": "image",
    "title": "\"Image on Surface Sphere\"",
    "category": "section",
    "text": "Tags: 3d, documentation, image, sphere, surface.using Makie\n\nn = 20\nθ = [0;(0.5:n-0.5)/n;1]\nφ = [(0:2n-2)*2/(2n-1);2]\nx = [cospi(φ)*sinpi(θ) for θ in θ, φ in φ]\ny = [sinpi(φ)*sinpi(θ) for θ in θ, φ in φ]\nz = [cospi(θ) for θ in θ, φ in φ]\nrand([-1f0, 1f0], 3)\npts = vec(Point3f0.(x, y, z))\nsurface(x, y, z, image = Makie.logo())\n\n"
},

{
    "location": "examples-image.html#\"Test-heatmap-image-overlap\"-1",
    "page": "image",
    "title": "\"Test heatmap + image overlap\"",
    "category": "section",
    "text": "Tags: 2d, documentation, heatmap, image, transparency.using Makie\n\nheatmap(rand(32, 32))\nimage!(map(x->RGBAf0(x,0.5, 0.5, 0.8), rand(32,32)))\n\n"
},

{
    "location": "examples-lines.html#",
    "page": "lines",
    "title": "lines",
    "category": "page",
    "text": ""
},

{
    "location": "examples-lines.html#lines-1",
    "page": "lines",
    "title": "lines",
    "category": "section",
    "text": ""
},

{
    "location": "examples-lines.html#\"Connected-Sphere\"-1",
    "page": "lines",
    "title": "\"Connected Sphere\"",
    "category": "section",
    "text": "Tags: 3d, axis, lines, scatter, views.using Makie\n\nlarge_sphere = Sphere(Point3f0(0), 1f0)\npositions = decompose(Point3f0, large_sphere)\nlinepos = view(positions, rand(1:length(positions), 1000))\nscene = lines(linepos, linewidth = 0.1, color = :black)\nscatter!(scene, positions, strokewidth = 10, strokecolor = :white, color = RGBAf0(0.9, 0.2, 0.4, 0.6))\nscene\n\n"
},

{
    "location": "examples-lines.html#\"Moire\"-1",
    "page": "lines",
    "title": "\"Moire\"",
    "category": "section",
    "text": "Tags: 3d, camera, lines, linesegments, mp4, record, rotate_cam!, update_cam!.using Makie\n\nfunction cartesian(ll)\n    return Point3f0(\n        cos(ll[1]) * sin(ll[2]),\n        sin(ll[1]) * sin(ll[2]),\n        cos(ll[2])\n    )\nend\nfract(x) = x - floor(x)\nfunction calcpositions(rings, index, time, audio)\n    movement, radius, speed, spin = 1, 2, 3, 4;\n    position = Point3f0(0.0)\n    precision = 0.2f0\n    for ring in rings\n        position += ring[radius] * cartesian(\n            precision *\n            index *\n            Point2f0(ring[spin] + Point2f0(sin(time * ring[speed]), cos(time * ring[speed])) * ring[movement])\n        )\n    end\n    amplitude = audio[round(Int, clamp(fract(position[1] * 0.1), 0, 1) * (25000-1)) + 1]; # index * 0.002\n    position *= 1.0 + amplitude * 0.5;\n    position\nend\nrings = [(0.1f0, 1.0f0, 0.00001f0, Point2f0(0.2, 0.1)), (0.1f0, 0.0f0, 0.0002f0, Point2f0(0.052, 0.05))]\nN2 = 25000\nt_audio = sin.(linspace(0, 10pi, N2)) .+ (cos.(linspace(-3, 7pi, N2)) .* 0.6) .+ (rand(Float32, N2) .* 0.1) ./ 2f0\nstart = time()\nt = (time() - start) * 100\npos = calcpositions.((rings,), 1:N2, t, (t_audio,))\n\nscene = lines(pos, color = RGBAf0.(to_colormap(:RdBu, N2), 0.6), thickness = 0.6f0, show_axis = false)\nlinesegments!(scene, FRect3D(Vec3f0(-1.5), Vec3f0(3)), raw = true, linewidth = 3, linestyle = :dot)\neyepos = Vec3f0(5, 1.5, 0.5)\nlookat = Vec3f0(0)\nupdate_cam!(scene, eyepos, lookat)\nl = scene[1]\nN = 150\nrecord(scene, \"./docs/media/moire.mp4\", 1:N) do i\n    t = (time() - start) * 700\n    pos .= calcpositions.((rings,), 1:N2, t, (t_audio,))\n    l[1] = pos # update argument 1\n    rotate_cam!(scene, 0.0, 0.01, 0.01)\nend\n\n<video controls autoplay loop muted>\n  <source src=\"media\\moire.mp4\" type=\"video/mp4\">\n  Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n</video>"
},

{
    "location": "examples-lines.html#\"Line-GIF\"-1",
    "page": "lines",
    "title": "\"Line GIF\"",
    "category": "section",
    "text": "Tags: 3d, animated, gif, lines, offset, record.using Makie\n\nus = linspace(0, 1, 100)\nscene = Scene()\nscene = linesegments!(scene, FRect3D(Vec3f0(0, -1, 0), Vec3f0(1, 2, 2)))\np = lines!(scene, us, sin.(us .+ time()), zeros(100), linewidth = 3)[end]\nlineplots = [p]\ntranslate!(p, 0, 0, 0)\ncolors = to_colormap(:RdYlBu)\n#display(scene) # would be needed without the record\nN = 150\npath = record(scene, \"./docs/media/line_gif.gif\", 1:N) do i\n    global lineplots, scene\n    if length(lineplots) < 20\n        p = lines!(\n            scene,\n            us, sin.(us .+ time()), zeros(100),\n            color = colors[length(lineplots)],\n            linewidth = 3\n        )[end]\n        unshift!(lineplots, p)\n        translate!(p, 0, 0, 0)\n        #TODO automatically insert new plots\n        insert!(Makie.global_gl_screen(), scene, p)\n    else\n        lineplots = circshift(lineplots, 1)\n        lp = first(lineplots)\n        lp[2] = sin.(us .+ time())\n        translate!(lp, 0, 0, 0)\n    end\n    for lp in Iterators.drop(lineplots, 1)\n        z = translation(lp)[][3]\n        translate!(lp, 0, 0, z + 0.1)\n    end\nend\npath\n\n(Image: library lines 411:444)"
},

{
    "location": "examples-lines.html#\"Line-Function\"-1",
    "page": "lines",
    "title": "\"Line Function\"",
    "category": "section",
    "text": "Tags: 2d, documentation, lines.using Makie\n\nscene = Scene()\nx = linspace(0, 3pi)\nlines!(scene, x, sin.(x))\nlines!(scene, x, cos.(x), color = :blue)\n\n"
},

{
    "location": "examples-lines.html#\"Interaction-with-Mouse\"-1",
    "page": "lines",
    "title": "\"Interaction with Mouse\"",
    "category": "section",
    "text": "Tags: documentation, interactive, lines, marker, record, scatter.using Makie\n\nscene = Scene()\nr = linspace(0, 3, 4)\ncam2d!(scene)\ntime = Node(0.0)\npos = lift(scene.events.mouseposition, time) do mpos, t\n    map(linspace(0, 2pi, 60)) do i\n        circle = Point2f0(sin(i), cos(i))\n        mouse = to_world(scene, Point2f0(mpos))\n        secondary = (sin((i * 10f0) + t) * 0.09) * normalize(circle)\n        (secondary .+ circle) .+ mouse\n    end\nend\nscene = lines!(scene, pos, raw = true)\np1 = scene[end]\np2 = scatter!(\n    scene,\n    pos, markersize = 0.1f0,\n    marker = :star5,\n    color = p1[:color],\n    raw = true\n)[end]\nscene\ndisplay(Makie.global_gl_screen(), scene)\n\np1[:color] = RGBAf0(1, 0, 0, 0.1)\np2[:marker] = \'π\'\np2[:markersize] = 0.2\n\n# push a reasonable mouse position in case this is executed as part\n# of the documentation\npush!(scene.events.mouseposition, (250.0, 250.0))\nN = 50\nrecord(scene, \"./docs/media/interaction_with_mouse.mp4\", linspace(0.01, 0.4, N)) do i\n    push!(scene.events.mouseposition, (250.0, 250.0))\n    p2[:markersize] = i\n    push!(time, time[] + 0.1)\nend\n\n<video controls autoplay loop muted>\n  <source src=\"media\\interaction_with_mouse.mp4\" type=\"video/mp4\">\n  Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n</video>"
},

{
    "location": "examples-linesegments.html#",
    "page": "linesegments",
    "title": "linesegments",
    "category": "page",
    "text": ""
},

{
    "location": "examples-linesegments.html#linesegments-1",
    "page": "linesegments",
    "title": "linesegments",
    "category": "section",
    "text": ""
},

{
    "location": "examples-linesegments.html#\"Polygons\"-1",
    "page": "linesegments",
    "title": "\"Polygons\"",
    "category": "section",
    "text": "Tags: 2d, linesegments, poly, polygon.using Makie\nusing GeometryTypes\n\nscene = Scene(resolution = (500, 500))\npoints = decompose(Point2f0, Circle(Point2f0(50), 50f0))\npol = poly!(scene, points, color = :gray, strokewidth = 10, strokecolor = :red)\n# Optimized forms\npoly!(scene, [Circle(Point2f0(50+300), 50f0)], color = :gray, strokewidth = 10, strokecolor = :red)\npoly!(scene, [Circle(Point2f0(50+i, 50+i), 10f0) for i = 1:100:400], color = :red)\npoly!(scene, [Rectangle{Float32}(50+i, 50+i, 20, 20) for i = 1:100:400], strokewidth = 2, strokecolor = :green)\nlinesegments!(scene,\n    [Point2f0(50 + i, 50 + i) => Point2f0(i + 70, i + 70) for i = 1:100:400], linewidth = 8, color = :purple\n)\n\n"
},

{
    "location": "examples-linesegments.html#\"Moire\"-1",
    "page": "linesegments",
    "title": "\"Moire\"",
    "category": "section",
    "text": "Tags: 3d, camera, lines, linesegments, mp4, record, rotate_cam!, update_cam!.using Makie\n\nfunction cartesian(ll)\n    return Point3f0(\n        cos(ll[1]) * sin(ll[2]),\n        sin(ll[1]) * sin(ll[2]),\n        cos(ll[2])\n    )\nend\nfract(x) = x - floor(x)\nfunction calcpositions(rings, index, time, audio)\n    movement, radius, speed, spin = 1, 2, 3, 4;\n    position = Point3f0(0.0)\n    precision = 0.2f0\n    for ring in rings\n        position += ring[radius] * cartesian(\n            precision *\n            index *\n            Point2f0(ring[spin] + Point2f0(sin(time * ring[speed]), cos(time * ring[speed])) * ring[movement])\n        )\n    end\n    amplitude = audio[round(Int, clamp(fract(position[1] * 0.1), 0, 1) * (25000-1)) + 1]; # index * 0.002\n    position *= 1.0 + amplitude * 0.5;\n    position\nend\nrings = [(0.1f0, 1.0f0, 0.00001f0, Point2f0(0.2, 0.1)), (0.1f0, 0.0f0, 0.0002f0, Point2f0(0.052, 0.05))]\nN2 = 25000\nt_audio = sin.(linspace(0, 10pi, N2)) .+ (cos.(linspace(-3, 7pi, N2)) .* 0.6) .+ (rand(Float32, N2) .* 0.1) ./ 2f0\nstart = time()\nt = (time() - start) * 100\npos = calcpositions.((rings,), 1:N2, t, (t_audio,))\n\nscene = lines(pos, color = RGBAf0.(to_colormap(:RdBu, N2), 0.6), thickness = 0.6f0, show_axis = false)\nlinesegments!(scene, FRect3D(Vec3f0(-1.5), Vec3f0(3)), raw = true, linewidth = 3, linestyle = :dot)\neyepos = Vec3f0(5, 1.5, 0.5)\nlookat = Vec3f0(0)\nupdate_cam!(scene, eyepos, lookat)\nl = scene[1]\nN = 150\nrecord(scene, \"./docs/media/moire.mp4\", 1:N) do i\n    t = (time() - start) * 700\n    pos .= calcpositions.((rings,), 1:N2, t, (t_audio,))\n    l[1] = pos # update argument 1\n    rotate_cam!(scene, 0.0, 0.01, 0.01)\nend\n\n<video controls autoplay loop muted>\n  <source src=\"media\\moire.mp4\" type=\"video/mp4\">\n  Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n</video>"
},

{
    "location": "examples-mesh.html#",
    "page": "mesh",
    "title": "mesh",
    "category": "page",
    "text": ""
},

{
    "location": "examples-mesh.html#mesh-1",
    "page": "mesh",
    "title": "mesh",
    "category": "section",
    "text": ""
},

{
    "location": "examples-mesh.html#\"FEM-mesh-2D\"-1",
    "page": "mesh",
    "title": "\"FEM mesh 2D\"",
    "category": "section",
    "text": "Tags: 2d, fem, mesh.using Makie\n\ncoordinates = [\n    0.0 0.0;\n    0.5 0.0;\n    1.0 0.0;\n    0.0 0.5;\n    0.5 0.5;\n    1.0 0.5;\n    0.0 1.0;\n    0.5 1.0;\n    1.0 1.0;\n]\nconnectivity = [\n    1 2 5;\n    1 4 5;\n    2 3 6;\n    2 5 6;\n    4 5 8;\n    4 7 8;\n    5 6 9;\n    5 8 9;\n]\ncolor = [0.0, 0.0, 0.0, 0.0, -0.375, 0.0, 0.0, 0.0, 0.0]\nscene = mesh(coordinates, connectivity, color = color, shading = false)\nwireframe!(scene[end][1], color = (:black, 0.6), linewidth = 3)\n\n"
},

{
    "location": "examples-mesh.html#\"colored-triangle\"-1",
    "page": "mesh",
    "title": "\"colored triangle\"",
    "category": "section",
    "text": "Tags: 2d, mesh, polygon.using Makie\n\nmesh(\n    [(0.0, 0.0), (0.5, 1.0), (1.0, 0.0)], color = [:red, :green, :blue],\n    shading = false\n)\n\n"
},

{
    "location": "examples-mesh.html#\"FEM-mesh-3D\"-1",
    "page": "mesh",
    "title": "\"FEM mesh 3D\"",
    "category": "section",
    "text": "Tags: 3d, fem, mesh.using Makie\nusing GeometryTypes\n\ncat = Makie.loadasset(\"cat.obj\")\nvertices = decompose(Point3f0, cat)\nfaces = decompose(Face{3, Int}, cat)\ncoordinates = [vertices[i][j] for i = 1:length(vertices), j = 1:3]\nconnectivity = [faces[i][j] for i = 1:length(faces), j = 1:3]\nmesh(\n    coordinates, connectivity,\n    color = rand(length(vertices))\n)\n\n"
},

{
    "location": "examples-mesh.html#\"Fluctuation-3D\"-1",
    "page": "mesh",
    "title": "\"Fluctuation 3D\"",
    "category": "section",
    "text": "Tags: 3d, animated, axis, mesh, meshscatter.using Makie\nusing GeometryTypes, Colors\n\nscene = Scene()\n# define points/edges\nperturbfactor = 4e1\nN = 3; nbfacese = 30; radius = 0.02\nlarge_sphere = Sphere(Point3f0(0), 1f0)\npositions = decompose(Point3f0, large_sphere, 30)\nnp = length(positions)\npts = [positions[k][l] for k = 1:length(positions), l = 1:3]\npts = vcat(pts, 1.1 * pts + randn(size(pts)) / perturbfactor) # light position influence ?\nedges = hcat(collect(1:np), collect(1:np) + np)\nne = size(edges, 1); np = size(pts, 1)\n# define markers meshes\nmeshC = GLNormalMesh(\n    Makie.Cylinder{3, Float32}(\n        Point3f0(0., 0., 0.),\n        Point3f0(0., 0, 1.),\n        Float32(1)\n    ), nbfacese\n)\nmeshS = GLNormalMesh(large_sphere, 20)\n# define colors, markersizes and rotations\npG = [Point3f0(pts[k, 1], pts[k, 2], pts[k, 3]) for k = 1:np]\nlengthsC = sqrt.(sum((pts[edges[:,1], :] .- pts[edges[:, 2], :]) .^ 2, 2))\nsizesC = [Vec3f0(radius, radius, lengthsC[i]) for i = 1:ne]\nsizesC = [Vec3f0(1., 1., 1.) for i = 1:ne]\ncolorsp = [RGBA{Float32}(rand(), rand(), rand(), 1.) for i = 1:np]\ncolorsC = [(colorsp[edges[i, 1]] + colorsp[edges[i, 2]]) / 2. for i = 1:ne]\nsizesC = [Vec3f0(radius, radius, lengthsC[i]) for i = 1:ne]\nQlist = zeros(ne, 4)\nfor k = 1:ne\n    ct = GeometryTypes.Cylinder{3, Float32}(\n        Point3f0(pts[edges[k, 1], 1], pts[edges[k, 1], 2], pts[edges[k, 1], 3]),\n        Point3f0(pts[edges[k, 2], 1], pts[edges[k, 2], 2], pts[edges[k, 2], 3]),\n        Float32(1)\n    )\n    Q = GeometryTypes.rotation(ct)\n    r = 0.5 * sqrt(1 + Q[1, 1] + Q[2, 2] + Q[3, 3]); Qlist[k, 4] = r\n    Qlist[k, 1] = (Q[3, 2] - Q[2, 3]) / (4 * r)\n    Qlist[k, 2] = (Q[1, 3] - Q[3, 1]) / (4 * r)\n    Qlist[k, 3] = (Q[2, 1] - Q[1, 2]) / (4 * r)\nend\nrotationsC = [Makie.Vec4f0(Qlist[i, 1], Qlist[i, 2], Qlist[i, 3], Qlist[i, 4]) for i = 1:ne]\n# plot\nhm = meshscatter!(\n    scene, pG[edges[:, 1]],\n    color = colorsC, marker = meshC,\n    markersize = sizesC,  rotations = rotationsC,\n)\nhp = meshscatter!(\n    scene, pG,\n    color = colorsp, marker = meshS, markersize = radius,\n)\n\n"
},

{
    "location": "examples-mesh.html#\"Normals-of-a-Cat\"-1",
    "page": "mesh",
    "title": "\"Normals of a Cat\"",
    "category": "section",
    "text": "Tags: 3d, cat, linesegment, mesh.using Makie\n\nx = Makie.loadasset(\"cat.obj\")\nmesh(x, color = :black)\npos = map(x.vertices, x.normals) do p, n\n    p => p .+ (normalize(n) .* 0.05f0)\nend\nlinesegments!(pos, color = :blue)\n\n"
},

{
    "location": "examples-mesh.html#\"Sphere-Mesh\"-1",
    "page": "mesh",
    "title": "\"Sphere Mesh\"",
    "category": "section",
    "text": "Tags: 3d, mesh.using Makie\n\nmesh(Sphere(Point3f0(0), 1f0), color = :blue)\n\n"
},

{
    "location": "examples-mesh.html#\"Merged-color-Mesh\"-1",
    "page": "mesh",
    "title": "\"Merged color Mesh\"",
    "category": "section",
    "text": "Tags: 3d, color, mesh.using Makie\nusing GeometryTypes\n\nx = Vec3f0(0); baselen = 0.2f0; dirlen = 1f0\n# create an array of differently colored boxes in the direction of the 3 axes\nrectangles = [\n    (HyperRectangle(Vec3f0(x), Vec3f0(dirlen, baselen, baselen)), RGBAf0(1,0,0,1)),\n    (HyperRectangle(Vec3f0(x), Vec3f0(baselen, dirlen, baselen)), RGBAf0(0,1,0,1)),\n    (HyperRectangle(Vec3f0(x), Vec3f0(baselen, baselen, dirlen)), RGBAf0(0,0,1,1))\n]\nmeshes = map(GLNormalMesh, rectangles)\nmesh(merge(meshes))\n\n"
},

{
    "location": "examples-mesh.html#\"Textured-Mesh\"-1",
    "page": "mesh",
    "title": "\"Textured Mesh\"",
    "category": "section",
    "text": "Tags: 3d, cat, documentation, mesh, texture.using Makie\nusing FileIO\n\nscene = Scene(resolution = (500, 500))\ncatmesh = FileIO.load(Makie.assetpath(\"cat.obj\"), GLNormalUVMesh)\nmesh(catmesh, color = Makie.loadasset(\"diffusemap.tga\"))\n\n"
},

{
    "location": "examples-mesh.html#\"Load-Mesh\"-1",
    "page": "mesh",
    "title": "\"Load Mesh\"",
    "category": "section",
    "text": "Tags: 3d, cat, documentation, mesh.using Makie\n\nmesh(Makie.loadasset(\"cat.obj\"))\n\n"
},

{
    "location": "examples-mesh.html#\"Colored-Mesh\"-1",
    "page": "mesh",
    "title": "\"Colored Mesh\"",
    "category": "section",
    "text": "Tags: 3d, axis, documentation, mesh.using Makie\n\nx = [0, 1, 2, 0]\ny = [0, 0, 1, 2]\nz = [0, 2, 0, 1]\ncolor = [:red, :green, :blue, :yellow]\ni = [0, 0, 0, 1]\nj = [1, 2, 3, 2]\nk = [2, 3, 1, 3]\n# indices interpreted as triangles (every 3 sequential indices)\nindices = [1, 2, 3,   1, 3, 4,   1, 4, 2,   2, 3, 4]\nmesh(x, y, z, indices, color = color)\n\n"
},

{
    "location": "examples-mesh.html#\"Wireframe-of-a-Mesh\"-1",
    "page": "mesh",
    "title": "\"Wireframe of a Mesh\"",
    "category": "section",
    "text": "Tags: 3d, cat, documentation, mesh, wireframe.using Makie\n\nwireframe(Makie.loadasset(\"cat.obj\"))\n\n"
},

{
    "location": "examples-meshscatter.html#",
    "page": "meshscatter",
    "title": "meshscatter",
    "category": "page",
    "text": ""
},

{
    "location": "examples-meshscatter.html#meshscatter-1",
    "page": "meshscatter",
    "title": "meshscatter",
    "category": "section",
    "text": ""
},

{
    "location": "examples-meshscatter.html#\"Fluctuation-3D\"-1",
    "page": "meshscatter",
    "title": "\"Fluctuation 3D\"",
    "category": "section",
    "text": "Tags: 3d, animated, axis, mesh, meshscatter.using Makie\nusing GeometryTypes, Colors\n\nscene = Scene()\n# define points/edges\nperturbfactor = 4e1\nN = 3; nbfacese = 30; radius = 0.02\nlarge_sphere = Sphere(Point3f0(0), 1f0)\npositions = decompose(Point3f0, large_sphere, 30)\nnp = length(positions)\npts = [positions[k][l] for k = 1:length(positions), l = 1:3]\npts = vcat(pts, 1.1 * pts + randn(size(pts)) / perturbfactor) # light position influence ?\nedges = hcat(collect(1:np), collect(1:np) + np)\nne = size(edges, 1); np = size(pts, 1)\n# define markers meshes\nmeshC = GLNormalMesh(\n    Makie.Cylinder{3, Float32}(\n        Point3f0(0., 0., 0.),\n        Point3f0(0., 0, 1.),\n        Float32(1)\n    ), nbfacese\n)\nmeshS = GLNormalMesh(large_sphere, 20)\n# define colors, markersizes and rotations\npG = [Point3f0(pts[k, 1], pts[k, 2], pts[k, 3]) for k = 1:np]\nlengthsC = sqrt.(sum((pts[edges[:,1], :] .- pts[edges[:, 2], :]) .^ 2, 2))\nsizesC = [Vec3f0(radius, radius, lengthsC[i]) for i = 1:ne]\nsizesC = [Vec3f0(1., 1., 1.) for i = 1:ne]\ncolorsp = [RGBA{Float32}(rand(), rand(), rand(), 1.) for i = 1:np]\ncolorsC = [(colorsp[edges[i, 1]] + colorsp[edges[i, 2]]) / 2. for i = 1:ne]\nsizesC = [Vec3f0(radius, radius, lengthsC[i]) for i = 1:ne]\nQlist = zeros(ne, 4)\nfor k = 1:ne\n    ct = GeometryTypes.Cylinder{3, Float32}(\n        Point3f0(pts[edges[k, 1], 1], pts[edges[k, 1], 2], pts[edges[k, 1], 3]),\n        Point3f0(pts[edges[k, 2], 1], pts[edges[k, 2], 2], pts[edges[k, 2], 3]),\n        Float32(1)\n    )\n    Q = GeometryTypes.rotation(ct)\n    r = 0.5 * sqrt(1 + Q[1, 1] + Q[2, 2] + Q[3, 3]); Qlist[k, 4] = r\n    Qlist[k, 1] = (Q[3, 2] - Q[2, 3]) / (4 * r)\n    Qlist[k, 2] = (Q[1, 3] - Q[3, 1]) / (4 * r)\n    Qlist[k, 3] = (Q[2, 1] - Q[1, 2]) / (4 * r)\nend\nrotationsC = [Makie.Vec4f0(Qlist[i, 1], Qlist[i, 2], Qlist[i, 3], Qlist[i, 4]) for i = 1:ne]\n# plot\nhm = meshscatter!(\n    scene, pG[edges[:, 1]],\n    color = colorsC, marker = meshC,\n    markersize = sizesC,  rotations = rotationsC,\n)\nhp = meshscatter!(\n    scene, pG,\n    color = colorsp, marker = meshS, markersize = radius,\n)\n\n"
},

{
    "location": "examples-meshscatter.html#\"Simple-meshscatter\"-1",
    "page": "meshscatter",
    "title": "\"Simple meshscatter\"",
    "category": "section",
    "text": "Tags: 3d, meshscatter.using Makie\n\nlarge_sphere = Sphere(Point3f0(0), 1f0)\npositions = decompose(Point3f0, large_sphere)\nmeshscatter(positions, color = RGBAf0(0.9, 0.2, 0.4, 1), markersize = 0.05)\n\n"
},

{
    "location": "examples-meshscatter.html#\"Meshscatter-Function\"-1",
    "page": "meshscatter",
    "title": "\"Meshscatter Function\"",
    "category": "section",
    "text": "Tags: 3d, documentation, meshscatter.using Makie\nusing GeometryTypes\n\nlarge_sphere = Sphere(Point3f0(0), 1f0)\npositions = decompose(Point3f0, large_sphere)\ncolS = [RGBAf0(rand(), rand(), rand(), 1.0) for i = 1:length(positions)]\nsizesS = [rand(Point3f0) .* 0.05f0 for i = 1:length(positions)]\nmeshscatter(positions, color = colS, markersize = sizesS)\n\n"
},

{
    "location": "examples-meshscatter.html#\"Record-Video\"-1",
    "page": "meshscatter",
    "title": "\"Record Video\"",
    "category": "section",
    "text": "Tags: 3d, documentation, linesegment, meshscatter, record.using Makie\n\nscene = Scene()\n\nf(t, v, s) = (sin(v + t) * s, cos(v + t) * s, (cos(v + t) + sin(v)) * s)\nt = Node(Base.time()) # create a life signal\nlimits = FRect3D(Vec3f0(-1.5, -1.5, -3), Vec3f0(3, 3, 6))\np1 = meshscatter!(scene, lift(t-> f.(t, linspace(0, 2pi, 50), 1), t), markersize = 0.05)[end]\np2 = meshscatter!(scene, lift(t-> f.(t * 2.0, linspace(0, 2pi, 50), 1.5), t), markersize = 0.05)[end]\n\nlines = lift(p1[1], p2[1]) do pos1, pos2\n    map((a, b)-> (a, b), pos1, pos2)\nend\nlinesegments!(scene, lines, linestyle = :dot, limits = limits)\n# record a video\nN = 150\nrecord(scene, \"./docs/media/record_video.mp4\", 1:N) do i\n    push!(t, Base.time())\nend\n\n<video controls autoplay loop muted>\n  <source src=\"media\\record_video.mp4\" type=\"video/mp4\">\n  Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n</video>"
},

{
    "location": "examples-scatter.html#",
    "page": "scatter",
    "title": "scatter",
    "category": "page",
    "text": ""
},

{
    "location": "examples-scatter.html#scatter-1",
    "page": "scatter",
    "title": "scatter",
    "category": "section",
    "text": ""
},

{
    "location": "examples-scatter.html#\"scatter-colormap\"-1",
    "page": "scatter",
    "title": "\"scatter colormap\"",
    "category": "section",
    "text": "Tags: 2d, colormap, scatter.using Makie\n\nscatter(rand(10), rand(10), color = rand(10))\n\n"
},

{
    "location": "examples-scatter.html#\"Subscenes\"-1",
    "page": "scatter",
    "title": "\"Subscenes\"",
    "category": "section",
    "text": "Tags: 2d, image, scatter, subscene.using Makie\n\nimg = rand(RGBAf0, 100, 100)\nscene = image(img, show_axis = false)\nsubscene = Scene(scene, IRect(100, 100, 300, 300))\nscatter!(subscene, rand(100) * 200, rand(100) * 200, markersize = 4)\nscene\n\n"
},

{
    "location": "examples-scatter.html#\"Animated-Scatter\"-1",
    "page": "scatter",
    "title": "\"Animated Scatter\"",
    "category": "section",
    "text": "Tags: 2d, animated, record, scatter, updating.using Makie\n\nN = 10\nr = [(rand(7, 2) .- 0.5) .* 25 for i = 1:N]\nscene = scatter(r[1][:, 1], r[1][:, 2], markersize = 1, limits = FRect(-25/2, -25/2, 25, 25))\ns = scene[end] # last plot in scene\nrecord(scene, \"./docs/media/animated_scatter.mp4\", r) do m\n    s[1] = m[:, 1]\n    s[2] = m[:, 2]\nend\n\n<video controls autoplay loop muted>\n  <source src=\"media\\animated_scatter.mp4\" type=\"video/mp4\">\n  Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n</video>"
},

{
    "location": "examples-scatter.html#\"Connected-Sphere\"-1",
    "page": "scatter",
    "title": "\"Connected Sphere\"",
    "category": "section",
    "text": "Tags: 3d, axis, lines, scatter, views.using Makie\n\nlarge_sphere = Sphere(Point3f0(0), 1f0)\npositions = decompose(Point3f0, large_sphere)\nlinepos = view(positions, rand(1:length(positions), 1000))\nscene = lines(linepos, linewidth = 0.1, color = :black)\nscatter!(scene, positions, strokewidth = 10, strokecolor = :white, color = RGBAf0(0.9, 0.2, 0.4, 0.6))\nscene\n\n"
},

{
    "location": "examples-scatter.html#\"image-scatter\"-1",
    "page": "scatter",
    "title": "\"image scatter\"",
    "category": "section",
    "text": "Tags: 3d, image, scatter.using Makie\n\nscatter(\n    1:10, 1:10, rand(10, 10) .* 10,\n    rotations = normalize.(rand(Quaternionf0, 10*10)),\n    markersize = 1,\n    # can also be an array of images for each point\n    # need to be the same size for best performance, though\n    marker = Makie.logo()\n)\n\n"
},

{
    "location": "examples-scatter.html#\"Stars\"-1",
    "page": "scatter",
    "title": "\"Stars\"",
    "category": "section",
    "text": "Tags: 3d, camera, glow, scatter, update_cam!.using Makie\n\nstars = 100_000\nscene = Scene(backgroundcolor = :black)\nscatter!(\n    scene,\n    (rand(Point3f0, stars) .- 0.5) .* 10,\n    glowwidth = 0.005, glowcolor = :white, color = RGBAf0(0.8, 0.9, 0.95, 0.4),\n    markersize = rand(linspace(0.0001, 0.01, 100), stars),\n    show_axis = false\n)\nupdate_cam!(scene, FRect3D(Vec3f0(-2), Vec3f0(4)))\nscene\n\n"
},

{
    "location": "examples-scatter.html#\"Unicode-Marker\"-1",
    "page": "scatter",
    "title": "\"Unicode Marker\"",
    "category": "section",
    "text": "Tags: 3d, axis, marker, scatter.using Makie\n\nscene = Scene(resolution = (500, 500))\nscatter!(scene, Point3f0[(1,0,0), (0,1,0), (0,0,1)], marker = [:x, :circle, :cross])\n\n"
},

{
    "location": "examples-scatter.html#\"scatter\"-1",
    "page": "scatter",
    "title": "\"scatter\"",
    "category": "section",
    "text": "Tags: 2d, documentation, scatter.using Makie\n\nscatter(rand(20), rand(20), markersize = 0.03)\n\n"
},

{
    "location": "examples-scatter.html#\"Marker-sizes\"-1",
    "page": "scatter",
    "title": "\"Marker sizes\"",
    "category": "section",
    "text": "Tags: 2d, documentation, scatter.using Makie\n\nscatter(rand(20), rand(20), markersize = rand(20)./20, color = to_colormap(:Spectral, 20))\n\n"
},

{
    "location": "examples-scatter.html#\"Interaction\"-1",
    "page": "scatter",
    "title": "\"Interaction\"",
    "category": "section",
    "text": "Tags: 2d, documentation, linesegment, record, scatter.using Makie\n\nscene = Scene(resolution = (500, 500))\n\nf(t, v, s) = (sin(v + t) * s, cos(v + t) * s)\ntime = Node(0.0)\np1 = scatter!(scene, lift(t-> f.(t, linspace(0, 2pi, 50), 1), time))[end]\np2 = scatter!(scene, lift(t-> f.(t * 2.0, linspace(0, 2pi, 50), 1.5), time))[end]\nlines = lift(p1[1], p2[1]) do pos1, pos2\n    map((a, b)-> (a, b), pos1, pos2)\nend\nlinesegments!(scene, lines)\nN = 150\nrecord(scene, \"./docs/media/interaction.mp4\", linspace(0, 10, N)) do i\n    push!(time, i)\nend\n\n<video controls autoplay loop muted>\n  <source src=\"media\\interaction.mp4\" type=\"video/mp4\">\n  Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n</video>"
},

{
    "location": "examples-scatter.html#\"Interaction-with-Mouse\"-1",
    "page": "scatter",
    "title": "\"Interaction with Mouse\"",
    "category": "section",
    "text": "Tags: documentation, interactive, lines, marker, record, scatter.using Makie\n\nscene = Scene()\nr = linspace(0, 3, 4)\ncam2d!(scene)\ntime = Node(0.0)\npos = lift(scene.events.mouseposition, time) do mpos, t\n    map(linspace(0, 2pi, 60)) do i\n        circle = Point2f0(sin(i), cos(i))\n        mouse = to_world(scene, Point2f0(mpos))\n        secondary = (sin((i * 10f0) + t) * 0.09) * normalize(circle)\n        (secondary .+ circle) .+ mouse\n    end\nend\nscene = lines!(scene, pos, raw = true)\np1 = scene[end]\np2 = scatter!(\n    scene,\n    pos, markersize = 0.1f0,\n    marker = :star5,\n    color = p1[:color],\n    raw = true\n)[end]\nscene\ndisplay(Makie.global_gl_screen(), scene)\n\np1[:color] = RGBAf0(1, 0, 0, 0.1)\np2[:marker] = \'π\'\np2[:markersize] = 0.2\n\n# push a reasonable mouse position in case this is executed as part\n# of the documentation\npush!(scene.events.mouseposition, (250.0, 250.0))\nN = 50\nrecord(scene, \"./docs/media/interaction_with_mouse.mp4\", linspace(0.01, 0.4, N)) do i\n    push!(scene.events.mouseposition, (250.0, 250.0))\n    p2[:markersize] = i\n    push!(time, time[] + 0.1)\nend\n\n<video controls autoplay loop muted>\n  <source src=\"media\\interaction_with_mouse.mp4\" type=\"video/mp4\">\n  Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n</video>"
},

{
    "location": "examples-scatter.html#\"Marker-sizes-Marker-colors\"-1",
    "page": "scatter",
    "title": "\"Marker sizes + Marker colors\"",
    "category": "section",
    "text": "Tags: 2d, color, documentation, markersize, scatter.using Makie\n\nscatter(\n    rand(20), rand(20),\n    markersize = rand(20) ./20 + 0.02,\n    color = rand(RGBf0, 20)\n)\n\n"
},

{
    "location": "examples-scatter.html#\"Marker-offset\"-1",
    "page": "scatter",
    "title": "\"Marker offset\"",
    "category": "section",
    "text": "Tags: documentation, marker_offset, scatter.using Makie\n\nscene = Scene(resolution = (500, 500))\npoints = Point2f0[(0,0), (1,1), (2,2)]\noffset = rand(Point2f0, 3)./5\nscatter!(scene, points)\nscatter!(scene, points, marker_offset = offset, color = :red)\n\n"
},

{
    "location": "examples-scatter.html#\"Mouse-Picking\"-1",
    "page": "scatter",
    "title": "\"Mouse Picking\"",
    "category": "section",
    "text": "Tags: documentation, heatmap, interactive, scatter.using Makie\n\nimg = rand(100, 100)\nscene = Scene()\nheatmap!(scene, img, scale_plot = false)\nclicks = Node(Point2f0[(0,0)])\nforeach(scene.events.mousebuttons) do buttons\n   if ispressed(scene, Mouse.left)\n       pos = to_world(scene, Point2f0(scene.events.mouseposition[]))\n       push!(clicks, push!(clicks[], pos))\n   end\n   return\nend\nscatter!(scene, clicks, color = :red, marker = \'+\', markersize = 10, raw = true)\n\n"
},

{
    "location": "examples-scatter.html#\"Theming\"-1",
    "page": "scatter",
    "title": "\"Theming\"",
    "category": "section",
    "text": "Tags: documentation, scatter, set_theme, surface, theme.using Makie\n\nnew_theme = Theme(\n    resolution = (500, 500),\n    linewidth = 3,\n    colormap = :RdYlGn,\n    color = :red,\n    scatter = Theme(\n        marker = \'⊝\',\n        markersize = 0.03,\n        strokecolor = :black,\n        strokewidth = 0.1,\n    ),\n)\nAbstractPlotting.set_theme!(new_theme)\nscene2 = scatter(rand(100), rand(100))\nnew_theme[:color] = :blue\nnew_theme[:scatter, :marker] = \'◍\'\nnew_theme[:scatter, :markersize] = 0.05\nnew_theme[:scatter, :strokewidth] = 0.1\nnew_theme[:scatter, :strokecolor] = :green\nscene2 = scatter(rand(100), rand(100))\nscene2[end][:marker] = \'π\'\n\nr = linspace(-0.5pi, pi + pi/4, 100)\n\nAbstractPlotting.set_theme!(new_theme)\nscene = surface(r, r, (x, y)-> sin(2x) + cos(2y))\nscene[end][:colormap] = :PuOr\nscene\nsurface!(r + 2pi - pi/4, r, (x, y)-> sin(2x) + cos(2y))\nAbstractPlotting.set_theme!(resolution = (500, 500))\nsurface(r + 2pi - pi/4, r, (x, y)-> sin(2x) + cos(2y))\n\n"
},

{
    "location": "examples-surface.html#",
    "page": "surface",
    "title": "surface",
    "category": "page",
    "text": ""
},

{
    "location": "examples-surface.html#surface-1",
    "page": "surface",
    "title": "surface",
    "category": "section",
    "text": ""
},

{
    "location": "examples-surface.html#\"Axis-Surface\"-1",
    "page": "surface",
    "title": "\"Axis + Surface\"",
    "category": "section",
    "text": "Tags: 3d, axis, interaction, manipulation, surface.using Makie\n\nvx = -1:0.01:1\nvy = -1:0.01:1\n\nf(x, y) = (sin(x*10) + cos(y*10)) / 4\nscene = Scene(resolution = (500, 500))\n# One way to style the axis is to pass a nested dictionary to it.\nsurface!(scene, vx, vy, f, axis = NT(framestyle = NT(linewidth = 2.0)))\npsurf = scene[end] # the surface we last plotted to scene\n# One can also directly get the axis object and manipulate it\naxis = scene[Axis] # get axis\n\n# You can access nested attributes likes this:\naxis[:titlestyle, :axisnames] = (\"\\\\bf{ℜ}[u]\", \"\\\\bf{𝕴}[u]\", \" OK\\n\\\\bf{δ}\\n γ\")\ntstyle = axis[:titlestyle] # or just get the nested attributes and work directly with them\n\ntstyle[:textsize] = 10\ntstyle[:textcolor] = (:red, :green, :black)\ntstyle[:font] = \"helvetica\"\n\n\npsurf[:colormap] = :RdYlBu\nwh = widths(scene)\nt = text!(\n    campixel(scene),\n    \"Multipole Representation of first resonances of U-238\",\n    position = (wh[1] / 2.0, wh[2] - 20.0),\n    align = (:center,  :center),\n    textsize = 20,\n    font = \"helvetica\",\n    raw = :true\n)\nc = lines!(scene, Circle(Point2f0(0.1, 0.5), 0.1f0), color = :red, offset = Vec3f0(0, 0, 1))\nscene\n#update surface\n# TODO explain and improve the situation here\npsurf.converted[3][] = f.(vx .+ 0.5, (vy .+ 0.5)\')\nscene\n\n"
},

{
    "location": "examples-surface.html#\"Animated-surface-and-wireframe\"-1",
    "page": "surface",
    "title": "\"Animated surface and wireframe\"",
    "category": "section",
    "text": "Tags: 3d, animated, axis, record, surface, video, wireframe.using Makie\n\nscene = Scene();\nfunction xy_data(x, y)\n    r = sqrt(x^2 + y^2)\n    r == 0.0 ? 1f0 : (sin(r)/r)\nend\n\nr = linspace(-2, 2, 50)\nsurf_func(i) = [Float32(xy_data(x*i, y*i)) for x = r, y = r]\nz = surf_func(20)\nsurf = surface!(scene, r, r, z)[end]\n\nwf = wireframe!(scene, r, r, Makie.lift(x-> x .+ 1.0, surf[3]),\n    linewidth = 2f0, color = Makie.lift(x-> to_colormap(x)[5], surf[:colormap])\n)\nN = 150\nrecord(scene, \"./docs/media/animated_surface_and_wireframe.mp4\", linspace(5, 40, N)) do i\n    surf[3] = surf_func(i)\nend\n\n<video controls autoplay loop muted>\n  <source src=\"media\\animated_surface_and_wireframe.mp4\" type=\"video/mp4\">\n  Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n</video>"
},

{
    "location": "examples-surface.html#\"Wireframe-of-a-Surface\"-1",
    "page": "surface",
    "title": "\"Wireframe of a Surface\"",
    "category": "section",
    "text": "Tags: 3d, documentation, surface, wireframe.using Makie\n\nfunction xy_data(x, y)\n    r = sqrt(x^2 + y^2)\n    r == 0.0 ? 1f0 : (sin(r)/r)\nend\nN = 30\nlspace = linspace(-10, 10, N)\nz = Float32[xy_data(x, y) for x in lspace, y in lspace]\nrange = linspace(0, 3, N)\nwireframe(range, range, z)\n\n"
},

{
    "location": "examples-surface.html#\"Surface\"-1",
    "page": "surface",
    "title": "\"Surface\"",
    "category": "section",
    "text": "Tags: 3d, documentation, surface.using Makie\n\nN = 30\nfunction xy_data(x, y)\n    r = sqrt(x^2 + y^2)\n    r == 0.0 ? 1f0 : (sin(r)/r)\nend\nlspace = linspace(-10, 10, N)\nz = Float32[xy_data(x, y) for x in lspace, y in lspace]\nrange = linspace(0, 3, N)\nsurface(\n    range, range, z,\n    colormap = :Spectral\n)\n\n"
},

{
    "location": "examples-surface.html#\"Surface-with-image\"-1",
    "page": "surface",
    "title": "\"Surface with image\"",
    "category": "section",
    "text": "Tags: 3d, documentation, image, surface.using Makie\n\nN = 30\nfunction xy_data(x, y)\n    r = sqrt(x^2 + y^2)\n    r == 0.0 ? 1f0 : (sin(r)/r)\nend\nr = linspace(-2, 2, N)\nsurf_func(i) = [Float32(xy_data(x*i, y*i)) for x = r, y = r]\nsurface(\n    r, r, surf_func(10),\n    image = rand(RGBAf0, 124, 124)\n)\n\n"
},

{
    "location": "examples-surface.html#\"Image-on-Surface-Sphere\"-1",
    "page": "surface",
    "title": "\"Image on Surface Sphere\"",
    "category": "section",
    "text": "Tags: 3d, documentation, image, sphere, surface.using Makie\n\nn = 20\nθ = [0;(0.5:n-0.5)/n;1]\nφ = [(0:2n-2)*2/(2n-1);2]\nx = [cospi(φ)*sinpi(θ) for θ in θ, φ in φ]\ny = [sinpi(φ)*sinpi(θ) for θ in θ, φ in φ]\nz = [cospi(θ) for θ in θ, φ in φ]\nrand([-1f0, 1f0], 3)\npts = vec(Point3f0.(x, y, z))\nsurface(x, y, z, image = Makie.logo())\n\n"
},

{
    "location": "examples-surface.html#\"Arrows-on-Sphere\"-1",
    "page": "surface",
    "title": "\"Arrows on Sphere\"",
    "category": "section",
    "text": "Tags: 3d, arrows, documentation, sphere, surface.using Makie\n\nn = 20\nf   = (x,y,z) -> x*exp(cos(y)*z)\n∇f  = (x,y,z) -> Point3f0(exp(cos(y)*z), -sin(y)*z*x*exp(cos(y)*z), x*cos(y)*exp(cos(y)*z))\n∇ˢf = (x,y,z) -> ∇f(x,y,z) - Point3f0(x,y,z)*dot(Point3f0(x,y,z), ∇f(x,y,z))\n\nθ = [0;(0.5:n-0.5)/n;1]\nφ = [(0:2n-2)*2/(2n-1);2]\nx = [cospi(φ)*sinpi(θ) for θ in θ, φ in φ]\ny = [sinpi(φ)*sinpi(θ) for θ in θ, φ in φ]\nz = [cospi(θ) for θ in θ, φ in φ]\n\npts = vec(Point3f0.(x, y, z))\n∇ˢF = vec(∇ˢf.(x, y, z)) .* 0.1f0\nsurface(x, y, z)\n# TODO arrows seem pretty wrong\narrows!(\n    pts, ∇ˢF,\n    arrowsize = 0.03, linecolor = :white, linewidth = 3\n)\n\n"
},

{
    "location": "examples-surface.html#\"Theming\"-1",
    "page": "surface",
    "title": "\"Theming\"",
    "category": "section",
    "text": "Tags: documentation, scatter, set_theme, surface, theme.using Makie\n\nnew_theme = Theme(\n    resolution = (500, 500),\n    linewidth = 3,\n    colormap = :RdYlGn,\n    color = :red,\n    scatter = Theme(\n        marker = \'⊝\',\n        markersize = 0.03,\n        strokecolor = :black,\n        strokewidth = 0.1,\n    ),\n)\nAbstractPlotting.set_theme!(new_theme)\nscene2 = scatter(rand(100), rand(100))\nnew_theme[:color] = :blue\nnew_theme[:scatter, :marker] = \'◍\'\nnew_theme[:scatter, :markersize] = 0.05\nnew_theme[:scatter, :strokewidth] = 0.1\nnew_theme[:scatter, :strokecolor] = :green\nscene2 = scatter(rand(100), rand(100))\nscene2[end][:marker] = \'π\'\n\nr = linspace(-0.5pi, pi + pi/4, 100)\n\nAbstractPlotting.set_theme!(new_theme)\nscene = surface(r, r, (x, y)-> sin(2x) + cos(2y))\nscene[end][:colormap] = :PuOr\nscene\nsurface!(r + 2pi - pi/4, r, (x, y)-> sin(2x) + cos(2y))\nAbstractPlotting.set_theme!(resolution = (500, 500))\nsurface(r + 2pi - pi/4, r, (x, y)-> sin(2x) + cos(2y))\n\n"
},

{
    "location": "examples-text.html#",
    "page": "text",
    "title": "text",
    "category": "page",
    "text": ""
},

{
    "location": "examples-text.html#text-1",
    "page": "text",
    "title": "text",
    "category": "section",
    "text": ""
},

{
    "location": "examples-text.html#\"Text-Annotation\"-1",
    "page": "text",
    "title": "\"Text Annotation\"",
    "category": "section",
    "text": "Tags: 2d, align, text.using Makie\n\ntext(\n    \". This is an annotation!\",\n    position = (300, 200),\n    align = (:center,  :center),\n    textsize = 60,\n    font = \"Blackchancery\"\n)\n\n"
},

{
    "location": "examples-text.html#\"Text-rotation\"-1",
    "page": "text",
    "title": "\"Text rotation\"",
    "category": "section",
    "text": "Tags: 2d, rotation, text.using Makie\n\nscene = Scene(resolution = (500, 500))\npos = (500, 500)\nposis = Point2f0[]\nfor r in linspace(0, 2pi, 20)\n    p = pos .+ (sin(r)*100.0, cos(r) * 100)\n    push!(posis, p)\n    t = text!(\n        scene, \"test\",\n        position = p,\n        textsize = 50,\n        rotation = 1.5pi - r,\n        align = (:center, :center)\n    )\nend\nscatter!(scene, posis, markersize = 10)\n\n"
},

{
    "location": "examples-volume.html#",
    "page": "volume",
    "title": "volume",
    "category": "page",
    "text": ""
},

{
    "location": "examples-volume.html#volume-1",
    "page": "volume",
    "title": "volume",
    "category": "section",
    "text": ""
},

{
    "location": "examples-volume.html#\"Volume-Function\"-1",
    "page": "volume",
    "title": "\"Volume Function\"",
    "category": "section",
    "text": "Tags: 3d, documentation, volume.using Makie\n\nvolume(rand(32, 32, 32), algorithm = :mip)\n\n"
},

{
    "location": "examples-volume.html#\"3D-Contour-with-2D-contour-slices\"-1",
    "page": "volume",
    "title": "\"3D Contour with 2D contour slices\"",
    "category": "section",
    "text": "Tags: 3d, contour, documentation, heatmap, transformation, volume.using Makie\n\nfunction test(x, y, z)\n    xy = [x, y, z]\n    ((xy\') * eye(3, 3) * xy) / 20\nend\nx = linspace(-2pi, 2pi, 100)\nscene = Scene()\nc = contour!(scene, x, x, x, test, levels = 10)[end]\nxm, ym, zm = minimum(scene.limits[])\n# c[4] == fourth argument of the above plotting command\ncontour!(scene, x, x, map(v-> v[1, :, :], c[4]), transformation = (:xy, zm))\nheatmap!(scene, x, x, map(v-> v[:, 1, :], c[4]), transformation = (:xz, ym))\ncontour!(scene, x, x, map(v-> v[:, :, 1], c[4]), fillrange = true, transformation = (:yz, xm))\n\n"
},

{
    "location": "examples-contour.html#",
    "page": "contour",
    "title": "contour",
    "category": "page",
    "text": ""
},

{
    "location": "examples-contour.html#contour-1",
    "page": "contour",
    "title": "contour",
    "category": "section",
    "text": ""
},

{
    "location": "examples-contour.html#\"Contour-Function\"-1",
    "page": "contour",
    "title": "\"Contour Function\"",
    "category": "section",
    "text": "Tags: 2d, contour.using Makie\n\nr = linspace(-10, 10, 512)\nz = ((x, y)-> sin(x) + cos(y)).(r, r\')\ncontour(r, r, z, levels = 5, color = :RdYlBu)\n\n"
},

{
    "location": "examples-contour.html#\"contour\"-1",
    "page": "contour",
    "title": "\"contour\"",
    "category": "section",
    "text": "Tags: 2d, contour.using Makie\n\ny = linspace(-0.997669, 0.997669, 23)\ncontour(linspace(-0.99, 0.99, 23), y, rand(23, 23), levels = 10)\n\n"
},

{
    "location": "examples-contour.html#\"3D-Contour-with-2D-contour-slices\"-1",
    "page": "contour",
    "title": "\"3D Contour with 2D contour slices\"",
    "category": "section",
    "text": "Tags: 3d, contour, documentation, heatmap, transformation, volume.using Makie\n\nfunction test(x, y, z)\n    xy = [x, y, z]\n    ((xy\') * eye(3, 3) * xy) / 20\nend\nx = linspace(-2pi, 2pi, 100)\nscene = Scene()\nc = contour!(scene, x, x, x, test, levels = 10)[end]\nxm, ym, zm = minimum(scene.limits[])\n# c[4] == fourth argument of the above plotting command\ncontour!(scene, x, x, map(v-> v[1, :, :], c[4]), transformation = (:xy, zm))\nheatmap!(scene, x, x, map(v-> v[:, 1, :], c[4]), transformation = (:xz, ym))\ncontour!(scene, x, x, map(v-> v[:, :, 1], c[4]), fillrange = true, transformation = (:yz, xm))\n\n"
},

]}