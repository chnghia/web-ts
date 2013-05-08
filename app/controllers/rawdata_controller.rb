class RawdataController < ApplicationController
  # GET /rawdata
  # GET /rawdata.json
  def index
    @rawdata = Rawdatum.page(params[:page])

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @rawdata }
    end
  end

  # GET /rawdata/1
  # GET /rawdata/1.json
  def show
    @rawdatum = Rawdatum.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @rawdatum }
    end
  end

  # GET /rawdata/new
  # GET /rawdata/new.json
  def new
    @rawdatum = Rawdatum.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @rawdatum }
    end
  end

  # GET /rawdata/1/edit
  def edit
    @rawdatum = Rawdatum.find(params[:id])
  end

  # POST /rawdata
  # POST /rawdata.json
  def create
    @rawdatum = Rawdatum.new(params[:rawdatum])

    respond_to do |format|
      if @rawdatum.save
        format.html { redirect_to @rawdatum, notice: 'Rawdatum was successfully created.' }
        format.json { render json: @rawdatum, status: :created, location: @rawdatum }
      else
        format.html { render action: "new" }
        format.json { render json: @rawdatum.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /rawdata/1
  # PUT /rawdata/1.json
  def update
    @rawdatum = Rawdatum.find(params[:id])

    respond_to do |format|
      if @rawdatum.update_attributes(params[:rawdatum])
        format.html { redirect_to @rawdatum, notice: 'Rawdatum was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @rawdatum.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rawdata/1
  # DELETE /rawdata/1.json
  def destroy
    @rawdatum = Rawdatum.find(params[:id])
    @rawdatum.destroy

    respond_to do |format|
      format.html { redirect_to rawdata_url }
      format.json { head :no_content }
    end
  end

  def import
    Rawdatum.import("192.168.0.201")

    redirect_to :action => "index"
  end
end
